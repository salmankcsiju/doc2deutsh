import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Doc2Deutsch | Medical German Language Training for Doctors',
  description:
    'Doc2Deutsch provides structured medical German language training for Indian doctors planning Germany, from A1 to B2, with a clear focus on clinical communication.',
  metadataBase: new URL('https://www.doc2deutsch.example'),
  openGraph: {
    title:
      'Doc2Deutsch | Medical German Language Training for Doctors',
    description:
      'Medical German language training from A1 to B2 for doctors, with medical vocabulary and clinical communication practice.',
    type: 'website'
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-background text-slate-900 antialiased'>
        <div className='flex min-h-screen flex-col'>
          <Navbar />
          <main className='flex-1 pb-16 pt-20 sm:pt-24'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

