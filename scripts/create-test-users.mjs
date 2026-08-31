import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const password = process.env.TEST_ACCOUNT_PASSWORD;
//PassWord123
if (!url || !serviceRoleKey) throw new Error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY first.");
if (!password || password.length < 8) throw new Error("Set TEST_ACCOUNT_PASSWORD to at least 8 characters.");

const supabase = createClient(url, serviceRoleKey);
const users = [
  ["test.seller@pawingi.test", "seller"],
  ["test.broker@pawingi.test", "broker"],
  ["test.admin@pawingi.test", "admin"],
];

for (const [email, role] of users) {
  const { data, error } = await supabase.auth.admin.createUser({ email, password, email_confirm: true });
  if (error && !error.message.toLowerCase().includes("already been registered")) throw error;
  let user = data.user;
  if (!user) {
    const { data: usersData, error: listError } = await supabase.auth.admin.listUsers({ perPage: 1000 });
    if (listError) throw listError;
    user = usersData.users.find((candidate) => candidate.email === email);
  }
  if (!user) throw new Error(`Could not find Auth user ${email}.`);
  const { error: updateError } = await supabase.auth.admin.updateUserById(user.id, {
    password,
    email_confirm: true,
  });
  if (updateError) throw updateError;
  const { error: profileError } = await supabase.from("profiles").upsert({ id: user.id, role });
  if (profileError) throw profileError;
  console.log(`${email} -> ${role}`);
}