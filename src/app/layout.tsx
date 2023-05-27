import './globals.css';
import { Metadata } from 'next';
import { Header } from '@/app/layout-components/Header';
import { Footer } from '@/app/layout-components/Footer';

export const metadata: Metadata = {
  title: 'Fort eSports',
  description: 'Site oficial da Fort eSports, organização de esportes eletrônicos.',
  keywords: 'fort, esports, csgo, valorant, org, games, freefire',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
        <div className="flex flex-col min-h-screen relative z-10 overflow-x-hidden">
          <Header />
          <main className="grow pt-6 pb-9 z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
