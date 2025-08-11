import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js + Supabase + viem Starter',
  description: 'Minimal Next.js starter with Supabase Edge Functions and viem integration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}