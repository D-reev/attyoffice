import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options?: Record<string, unknown> }>) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set({ name, value, ...options });
            response = NextResponse.next({
              request: { headers: request.headers },
            });
            response.cookies.set({ name, value, ...options });
          });
        },
      },
    }
  );

  // Get the authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Protect dashboard routes
  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");

  if (isDashboardRoute) {
    // If not authenticated, redirect to login
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Get user's role from profiles table
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (error || !profile?.role) {
      // User has no valid role, redirect to login
      await supabase.auth.signOut();
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Extract the role from the URL path (e.g., /dashboard/admin -> admin)
    const pathSegments = request.nextUrl.pathname.split("/").filter(Boolean);
    const requestedRole = pathSegments[1]; // dashboard is at [0], role is at [1]

    // Define role hierarchies and allowed routes
    const roleAllowedRoutes: Record<string, string[]> = {
      admin: ["dashboard", "admin"],
      employee: ["dashboard", "employee"],
      broker: ["dashboard", "broker"],
      customer: ["dashboard", "customer"],
      seller: ["dashboard", "seller"],
      unverified_broker: ["dashboard", "broker"],
      unverified_seller: ["dashboard", "seller"],
    };

    // Check if user's role can access this route
    const allowedRoutes = roleAllowedRoutes[profile.role];

    if (!allowedRoutes || !allowedRoutes.includes(requestedRole)) {
      // User doesn't have permission to access this dashboard
      // Redirect to their role-appropriate dashboard or login
      const roleDestinations: Record<string, string> = {
        customer: "/dashboard/customer",
        broker: "/dashboard/broker",
        unverified_broker: "/dashboard/broker",
        seller: "/dashboard/seller",
        unverified_seller: "/dashboard/seller",
        admin: "/dashboard/admin",
        employee: "/dashboard/employee",
      };

      const destination = roleDestinations[profile.role] || "/login";
      return NextResponse.redirect(new URL(destination, request.url));
    }
  }

  // Protect login route - redirect to dashboard if already authenticated
  if (request.nextUrl.pathname === "/login" && user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profile?.role) {
      const roleDestinations: Record<string, string> = {
        customer: "/dashboard/customer",
        broker: "/dashboard/broker",
        unverified_broker: "/dashboard/broker",
        seller: "/dashboard/seller",
        unverified_seller: "/dashboard/seller",
        admin: "/dashboard/admin",
        employee: "/dashboard/employee",
      };

      const destination = roleDestinations[profile.role] || "/dashboard";
      return NextResponse.redirect(new URL(destination, request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg).*)",
  ],
};
