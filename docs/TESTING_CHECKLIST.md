# Route Protection Testing Checklist

## Pre-Test Setup

- [ ] Run `npm install` (already done)
- [ ] Verify all dashboard pages load without TypeScript errors
- [ ] Confirm Supabase credentials in `.env.local`
- [ ] Check that `profiles` table has test users with roles

## Security Tests

### Test 1: Unauthenticated Access
**Objective**: Verify users without sessions can't access dashboards

```
1. Open incognito/private browser window
2. Navigate to: http://localhost:3000/dashboard/admin
3. Expected: Redirects to /login page
4. ✅ PASS if redirected to login
```

### Test 2: Missing Role in Database
**Objective**: Verify users without valid roles are logged out

**Prerequisite**: Create a Supabase auth user without a profiles entry

```
1. Log in with the test user that has no role
2. Try to access any dashboard
3. Expected: Signed out and redirected to /login
4. Check console for auth error
5. ✅ PASS if redirected and signed out
```

### Test 3: Broker Can't Access Admin Dashboard
**Objective**: Verify cross-role access is prevented

```
1. Log in as a broker user
2. Navigate to: http://localhost:3000/dashboard/admin
3. Expected: Redirects to /dashboard/broker
4. Check URL bar confirms redirect
5. ✅ PASS if redirected to broker dashboard
```

### Test 4: Admin Can't Access Broker Dashboard (Vice Versa)
**Objective**: Verify admins are protected too

```
1. Log in as an admin user
2. Try to navigate to: http://localhost:3000/dashboard/broker
3. Expected: Redirects to /dashboard/admin
4. ✅ PASS if redirected to admin dashboard
```

### Test 5: Seller Can't Access Broker Dashboard
**Objective**: Verify all role combinations are checked

```
1. Log in as a seller user
2. Navigate to: http://localhost:3000/dashboard/broker
3. Expected: Redirects to /dashboard/seller
4. ✅ PASS if redirected to seller dashboard
```

### Test 6: Unverified Broker Can Access Broker Dashboard
**Objective**: Verify unverified roles work correctly

```
1. Log in as an unverified_broker user
2. Navigate to: http://localhost:3000/dashboard/broker
3. Expected: Page loads successfully
4. Check for content rendering
5. ✅ PASS if page loads without redirect
```

### Test 7: Unverified Seller Can Access Seller Dashboard
**Objective**: Verify both verified and unverified sellers work

```
1. Log in as an unverified_seller user
2. Navigate to: http://localhost:3000/dashboard/seller
3. Expected: Page loads successfully
4. ✅ PASS if page loads
```

### Test 8: Loading State Visible
**Objective**: Verify ProtectedRoute shows loading feedback

```
1. Log in successfully
2. Open browser DevTools (F12)
3. Go to Network tab, set throttling to "Slow 3G"
4. Navigate to: /dashboard/admin (or any dashboard)
5. Expected: See "Loading..." message briefly
6. ✅ PASS if loading state appears before content
```

### Test 9: Session Persistence
**Objective**: Verify users stay logged in across pages

```
1. Log in as any user
2. Navigate: /dashboard/admin → /dashboard/customer (in address bar)
3. Expected on step 2: Redirected to /dashboard/admin (own dashboard)
4. Stay on dashboard and refresh page (F5)
5. Expected: Page reloads without redirect to login
6. ✅ PASS if session persists and no login needed
```

### Test 10: Session Expiry Handling
**Objective**: Verify expired sessions are caught

```
1. Log in as any user
2. Open two browser tabs with the dashboard
3. In Tab 1: Sign out
4. In Tab 2: Refresh the page
5. Expected: Redirected to /login
6. Note: May not redirect immediately, but eventually when trying actions
7. ✅ PASS if eventually redirected to login
```

## Functional Tests

### Test 11: Correct Redirect After Login
**Objective**: Verify users go to their role dashboard

```
1. Clear all cookies/session
2. Log in with admin credentials
3. Expected: Automatically redirected to /dashboard/admin
4. Repeat with broker → /dashboard/broker
5. Repeat with seller → /dashboard/seller
6. Repeat with customer → /dashboard/customer
7. ✅ PASS if all redirect correctly
```

### Test 12: Catch-All Route Works
**Objective**: Verify /dashboard/[...path] provides access

```
1. Log in as any user
2. Navigate to: http://localhost:3000/dashboard
3. Expected: Shows portal selection or loads catch-all route
4. Verify content loads without redirect
5. ✅ PASS if catch-all page loads
```

### Test 13: Login Redirect Prevention
**Objective**: Verify already-logged-in users don't see login

```
1. Log in with any user
2. Navigate to: /login
3. Expected: Redirected to their dashboard (not stuck on login)
4. Check URL bar shows dashboard
5. ✅ PASS if redirected away from login
```

## Edge Cases

### Test 14: Very Fast Role Change
**Objective**: Verify system catches middleware/client sync issues

```
1. Log in as broker
2. Open /dashboard/broker successfully
3. Use database admin tool to change user role to "admin"
4. On the same page, try a form submission or wait 30 seconds
5. Expected: System detects role change (may not redirect immediately)
6. ✅ PASS if no security breach occurs
```

### Test 15: Simultaneous Tabs
**Objective**: Verify multiple tabs don't cause conflicts

```
1. Log in in Tab 1
2. Open /dashboard/admin in Tab 1
3. Open /dashboard/admin in Tab 2
4. Both should load successfully
5. Sign out in Tab 1
6. Refresh Tab 2
7. Expected: Tab 2 redirects to /login
8. ✅ PASS if no sync errors occur
```

## Console Checks

After each test, check browser console for:

- [ ] No "Missing auth" errors
- [ ] No "Error checking access" messages
- [ ] No TypeError or SyntaxError
- [ ] Supabase auth events firing correctly

View by opening DevTools: F12 → Console tab

## Performance Checks

- [ ] Dashboard pages load in < 2 seconds
- [ ] No flash of content before redirect (if unauthorized)
- [ ] Loading state appears smoothly
- [ ] No layout shift when content loads

## Database Verification

Run these queries in Supabase SQL editor:

```sql
-- Verify test users exist
SELECT id, email FROM auth.users LIMIT 10;

-- Verify profiles with roles
SELECT id, role FROM public.profiles LIMIT 10;

-- Check for mismatched users
SELECT u.id, u.email, p.role 
FROM auth.users u 
LEFT JOIN public.profiles p ON u.id = p.id 
WHERE p.role IS NULL;
```

Expected results:
- ✅ At least 4-5 test users
- ✅ Each user has a valid role
- ✅ No mismatched users (NULL roles)

## Sign-Off Checklist

When all tests pass, verify:

- [ ] Middleware is active (inspect middleware.ts exists)
- [ ] ProtectedRoute components are rendered (React DevTools)
- [ ] No console errors or warnings
- [ ] All redirect chains work as expected
- [ ] Page loads are smooth without flashing
- [ ] Unauthorized users can't access any dashboard
- [ ] Each user can only access their role's dashboard
- [ ] Sessions persist across page reloads
- [ ] Expired sessions are handled gracefully

## Troubleshooting

### Dashboard doesn't redirect on wrong role
**Possible causes**:
- Middleware not applied to route pattern
- Check `matcher` in middleware.ts
- Verify `.next` folder is cleared: `rm -r .next && npm run build`

### ProtectedRoute gets stuck on "Loading..."
**Possible causes**:
- Supabase connection failing
- profiles table doesn't have the user
- Role value has typo or mismatch

**Fix**:
```javascript
// Add to ProtectedRoute.tsx after setIsLoading(false):
console.log('Role:', role, 'Required:', requiredRoles);
```

### User redirected to login but they're logged in
**Possible causes**:
- Session cookie expired
- Supabase auth token invalid
- Browser cookie settings blocking Supabase

**Fix**:
1. Clear cookies: DevTools → Application → Cookies → Delete all
2. Log in again
3. Check .env.local variables

### Getting "Cannot find module" errors
**Possible causes**:
- Dependencies not installed
- TypeScript compilation error

**Fix**:
```bash
npm install
npm run build
```

---

## Test Results Summary

| Test | Status | Notes |
|------|--------|-------|
| Unauthenticated Access | ⬜ | |
| Missing Role | ⬜ | |
| Broker → Admin (blocked) | ⬜ | |
| Admin → Broker (blocked) | ⬜ | |
| Seller → Broker (blocked) | ⬜ | |
| Unverified Broker Access | ⬜ | |
| Unverified Seller Access | ⬜ | |
| Loading State Visible | ⬜ | |
| Session Persistence | ⬜ | |
| Session Expiry | ⬜ | |
| Correct Login Redirect | ⬜ | |
| Catch-All Route | ⬜ | |
| Login Redirect Prevention | ⬜ | |
| Fast Role Change | ⬜ | |
| Multiple Tabs | ⬜ | |

**Total Passed**: ___ / 15

---

**Testing Date**: _______________

**Tester**: _______________

**Notes/Issues Found**: 
