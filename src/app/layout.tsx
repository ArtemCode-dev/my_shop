import Header from '@/src/components/Header/page'
import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My shop',
  description: 'My first shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
      <Header />
        {children}
      <footer>
        footer
      </footer>
      </body>
    </html>
  )
}
