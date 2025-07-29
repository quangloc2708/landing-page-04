import type { Metadata } from 'next';
import { barlowSemiCondensed } from './fonts';
import './globals.css';
import Navbar from '@/components/Navbar';
export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Landing Page',
    template: '%s - Landing Page',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full w-full bg-white ${barlowSemiCondensed.variable}`}
    >
      <body className="bg-dark text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
