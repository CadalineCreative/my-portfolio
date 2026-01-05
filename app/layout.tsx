import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { HamburgerMenu } from '@/components/hamburger-menu';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Cadaline - Designing Physical & Digital Spaces',
  description: 'Sophisticated design solutions for both physical and digital environments. Expert architecture, interior design, and web development services.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Cadaline - Designing Physical & Digital Spaces',
    description: 'Sophisticated design solutions for both physical and digital environments.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-slate-50`}>
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center relative">
            {/* Logo - Centered */}
            <Link href="/" className="relative block transition-opacity hover:opacity-80">
              <div className="relative h-12 w-auto">
                <Image
                  src="https://cdn.abacus.ai/images/23e1148d-8b7d-44c4-bbbd-ae6d898df011.png"
                  alt="Cadaline Logo"
                  width={240}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Hamburger Menu - Absolute positioned to right */}
            <div className="absolute right-6">
              <HamburgerMenu />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 mt-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Cadaline. Designing spaces that inspire.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
