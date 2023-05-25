import './globals.css';
import { Metadata } from 'next';
import { Header } from '@/app/components/Header';

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
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
