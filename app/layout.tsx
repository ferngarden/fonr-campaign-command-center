import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FONR Campaign Command Center',
  description: 'Campaign management dashboard for Friends of Ngong Road nonprofit organization',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-fonr-cream text-fonr-dark font-dm-sans">
        {children}
      </body>
    </html>
  );
}
