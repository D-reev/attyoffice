# Route Protection Implementation Guide

## Overview

This document explains how to implement role-based route protection for dashboard pages in the Pawingi Realty application.

## Architecture

The route protection system consists of three layers:

1. **Middleware Layer** (`middleware.ts`): Server-side protection that redirects unauthorized users at the request level
2. **Auth Utilities** (`lib/auth.ts`): Server-side functions to check user roles and permissions
3. **Client-side Components** (`components/ProtectedRoute.tsx`): React components for client-side route guarding

## Implementation Steps

### Step 1: Wrap Dashboard Pages with ProtectedRoute

For **client-side pages** (pages marked with `"use client"`), wrap the entire page content with the `ProtectedRoute` component.

#### Example: Admin Dashboard

```tsx
"use client";

import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function AdminPortalPage() {
  return (
    <ProtectedRoute requiredRoles="admin">
      <main>
        {/* Your dashboard content */}
      </main>
    </ProtectedRoute>
  );
}
```

#### Example: Broker Dashboard (Multiple Roles)

```tsx
"use client";

import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function BrokerPortalPage() {
  return (
    <ProtectedRoute requiredRoles={["broker", "unverified_broker"]}>
      <main>
        {/* Your dashboard content */}
      </main>
    </ProtectedRoute>
  );
}
```

### Step 2: Role-Based Access Matrix

The `ProtectedRoute` component checks the user's role against the required roles:

| User Role | Can Access |
|-----------|-----------|
| `admin` | `/dashboard/admin` |
| `employee` | `/dashboard/employee` |
| `broker` | `/dashboard/broker` |
| `unverified_broker` | `/dashboard/broker` |
| `seller` | `/dashboard/seller` |
| `unverified_seller` | `/dashboard/seller` |
| `customer` | `/dashboard/customer` |

### Step 3: Using Auth Hooks in Components

If you need to conditionally render content based on the user's role within a page:

#### Check Current Role

```tsx
"use client";

import { useUserRole } from "@/components/ProtectedRoute";

export function MyComponent() {
  const { role, isLoading, error } = useUserRole();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>User role: {role}</div>;
}
```

#### Check Specific Permissions

```tsx
"use client";

import { useHasRole } from "@/components/ProtectedRoute";

export function AdminOnlySection() {
  const { hasRole } = useHasRole("admin");

  if (!hasRole) return null;

  return <div>Admin-only content</div>;
}
```

## Security Flow

### Authentication Flow

1. User navigates to `/dashboard/*`
2. **Middleware** checks if user is authenticated:
   - ❌ Not logged in → Redirects to `/login`
   - ✅ Logged in → Continues
3. **Middleware** verifies user has valid role in `profiles` table:
   - ❌ No role assigned → Signs out & redirects to `/login`
   - ✅ Role assigned → Continues
4. **Middleware** checks if role matches the dashboard:
   - ❌ Role doesn't match (e.g., broker trying to access admin) → Redirects to their role dashboard
   - ✅ Role matches → Serves page to client
5. **ProtectedRoute Component** performs client-side verification:
   - Fetches user profile again to confirm role
   - Matches against required roles
   - Displays content or redirects if unauthorized

## Required Roles

### By Dashboard

- **Admin Dashboard**: `"admin"`
- **Employee Dashboard**: `"employee"`
- **Broker Dashboard**: `["broker", "unverified_broker"]`
- **Seller Dashboard**: `["seller", "unverified_seller"]`
- **Customer Dashboard**: `"customer"`

## Protected Routes List

```
GET  /dashboard/admin/*              → requires "admin"
GET  /dashboard/employee/*           → requires "employee"
GET  /dashboard/broker/*             → requires "broker" OR "unverified_broker"
GET  /dashboard/seller/*             → requires "seller" OR "unverified_seller"
GET  /dashboard/customer/*           → requires "customer"
```

## Applying to All Dashboard Pages

To apply protection to a dashboard page:

1. Add import: `import { ProtectedRoute } from "@/components/ProtectedRoute";`
2. Wrap the main JSX: `<ProtectedRoute requiredRoles="[ROLE]">{content}</ProtectedRoute>`

Replace `[ROLE]` with the appropriate role:
- Single role: `"admin"`
- Multiple roles: `["broker", "unverified_broker"]`

## Error Handling

### Scenario: User lacks permission

1. Middleware redirects to their role-appropriate dashboard
2. If no valid role exists, they're signed out and redirected to login

### Scenario: Session expires

1. Middleware detects missing authentication
2. User is redirected to `/login`

### Scenario: Role removed mid-session

1. Client-side `ProtectedRoute` detects missing role
2. User is redirected to `/login`
3. Forced re-authentication on next visit

## Verification Checklist

- [ ] All dashboard pages have `ProtectedRoute` wrapper
- [ ] Each dashboard specifies correct `requiredRoles`
- [ ] Middleware is in place at `/middleware.ts`
- [ ] Auth utilities exist at `/lib/auth.ts`
- [ ] Components exist at `/components/ProtectedRoute.tsx`
- [ ] Supabase `profiles` table has `role` column for each user
- [ ] Environment variables are set:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
