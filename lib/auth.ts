import { supabase } from "./supabase";

export type UserRole = 
  | "admin" 
  | "employee" 
  | "broker" 
  | "unverified_broker"
  | "seller" 
  | "unverified_seller"
  | "customer";

export interface UserProfile {
  id: string;
  role: UserRole;
  email?: string;
}

/**
 * Get the current user and their profile information
 */
export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (error || !profile) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    role: profile.role as UserRole,
  };
}

/**
 * Check if user has a specific role
 */
export async function hasRole(requiredRole: UserRole | UserRole[]) {
  const user = await getCurrentUser();

  if (!user) {
    return false;
  }

  const rolesArray = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
  return rolesArray.includes(user.role);
}

/**
 * Check if user is admin
 */
export async function isAdmin() {
  return hasRole("admin");
}

/**
 * Check if user is employee
 */
export async function isEmployee() {
  return hasRole(["admin", "employee"]);
}

/**
 * Check if user is broker
 */
export async function isBroker() {
  return hasRole(["broker", "unverified_broker"]);
}

/**
 * Check if user is seller
 */
export async function isSeller() {
  return hasRole(["seller", "unverified_seller"]);
}

/**
 * Check if user is customer
 */
export async function isCustomer() {
  return hasRole("customer");
}

/**
 * Verify user can access a specific dashboard
 */
export async function canAccessDashboard(role: string): Promise<boolean> {
  const user = await getCurrentUser();

  if (!user) {
    return false;
  }

  // Define what roles can access what dashboards
  const accessMatrix: Record<UserRole, string[]> = {
    admin: ["admin"],
    employee: ["employee"],
    broker: ["broker"],
    unverified_broker: ["broker"],
    seller: ["seller"],
    unverified_seller: ["seller"],
    customer: ["customer"],
  };

  const allowedDashboards = accessMatrix[user.role] || [];
  return allowedDashboards.includes(role);
}

/**
 * Sign out the user
 */
export async function signOut() {
  return supabase.auth.signOut();
}
