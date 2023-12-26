import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@styles/globals.css';
import { Header, Sidebar, ThemeProvider } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Library Management App',
  description: 'Library Management App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='tr'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='flex '>
            <div className='hidden lg:block'>
              <Sidebar />
            </div>
            <section className='flex-grow'>
              <Header />
              {children}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
