import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GreenGuard - AI-Powered Afforestation Monitoring',
  description: 'Track the survival and growth of trees with precision using AI and drone imagery.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:support@greenguard.com" className="text-gray-600 hover:text-[#28A745]">
                    support@greenguard.com
                  </a>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-[#28A745]">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#28A745]">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-600">
                  © {new Date().getFullYear()} GreenGuard. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}