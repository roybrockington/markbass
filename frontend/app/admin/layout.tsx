import { ReactNode } from 'react';

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Authentication is handled by route group layouts:
  // - (protected) routes require authentication
  // - (auth) routes redirect authenticated users
  return <>{children}</>;
}
