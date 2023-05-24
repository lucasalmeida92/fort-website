'use client'

import '../theme/globals.css';
import { theme } from '../theme';
import { ThemeProvider, CssBaseline } from '@mui/material';

const metadata = {
  title: 'Fort eSports',
  description: 'Site oficial da Fort eSports, organização de esportes eletrônicos.',
  keywords: 'fort, esports, csgo, valorant, org, games, freefire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          <header>HEADER</header>
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
