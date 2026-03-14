import type { Metadata } from 'next'
import './globals.css'
import { Agentation } from 'agentation'

export const metadata: Metadata = {
  title: 'Superteam Malaysia — Building the Future of Solana',
  description: 'The home for Solana builders in Malaysia. Learn, earn, build, and connect with the best Web3 talent.',
  openGraph: {
    title: 'Superteam Malaysia',
    description: 'The home for Solana builders in Malaysia.',
    url: 'https://my.superteam.fun',
    siteName: 'Superteam Malaysia',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  )
}
