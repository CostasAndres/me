import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrés Costas Moreno - Desarrollador Full Stack Junior',
  description: 'Desarrollador Full Stack Junior apasionado por crear experiencias web innovadoras. Especializado en React, Node.js y tecnologías modernas.',
  keywords: ['desarrollador', 'full stack', 'react', 'node.js', 'javascript', 'typescript', 'junior developer'],
  authors: [{ name: 'Andrés Costas Moreno' }],
  creator: 'Andrés Costas Moreno',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Andrés Costas Moreno - Desarrollador Full Stack Junior',
    description: 'Desarrollador Full Stack Junior apasionado por crear experiencias web innovadoras.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrés Costas Moreno - Desarrollador Full Stack Junior',
    description: 'Desarrollador Full Stack Junior apasionado por crear experiencias web innovadoras.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  
                  if (!theme || theme === 'system') {
                    document.documentElement.classList.add(systemTheme);
                  } else {
                    document.documentElement.classList.add(theme);
                  }
                } catch (e) {
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  document.documentElement.classList.add(systemTheme);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
