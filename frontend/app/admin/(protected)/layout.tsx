import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token');

  // Redirect to login if not authenticated
  if (!token) {
    redirect('/admin/login');
  }

  return <>{children}</>;
}
