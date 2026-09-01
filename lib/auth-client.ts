"use client";

import { useEffect, useState } from "react";
import { getCurrentUser, hasRole, type UserRole } from "./auth";

/**
 * Client-side hook to get current user's role
 * ⚠️ USE ONLY FOR CONDITIONAL UI RENDERING (showing/hiding buttons, elements)
 * ⚠️ DO NOT USE FOR ROUTE GUARDING - middleware handles all route protection
 */
export function useUserRole() {
  const [role, setRole] = useState<UserRole | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchRole() {
      try {
        const user = await getCurrentUser();
        if (isMounted) {
          if (user) {
            setRole(user.role);
          }
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error("Failed to fetch role"));
          setIsLoading(false);
        }
      }
    }

    fetchRole();

    return () => {
      isMounted = false;
    };
  }, []);

  return { role, isLoading, error };
}

/**
 * Client-side hook to check if user has specific role(s)
 * ⚠️ USE ONLY FOR CONDITIONAL UI RENDERING (showing/hiding buttons, elements)
 * ⚠️ DO NOT USE FOR ROUTE GUARDING - middleware handles all route protection
 */
export function useHasRole(requiredRole: UserRole | UserRole[]) {
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function checkRole() {
      try {
        const result = await hasRole(requiredRole);
        if (isMounted) {
          setHasAccess(result);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setHasAccess(false);
          setIsLoading(false);
        }
      }
    }

    checkRole();

    return () => {
      isMounted = false;
    };
  }, [requiredRole]);

  return { hasRole: hasAccess, isLoading };
}
