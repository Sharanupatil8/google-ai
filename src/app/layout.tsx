import type {Metadata} from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { Chatbot } from '@/components/chatbot/Chatbot';

// const geistSans = GeistSans({ // Incorrect: GeistSans is an object, not a function here
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = GeistMono({ // Incorrect: GeistMono is an object, not a function here
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Sai Motors Digital Showroom',
  description: 'Explore car models, book test drives, and get assistance at Sai Motors.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container py-8 md:py-12">
          {children}
        </main>
        <Footer />
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
