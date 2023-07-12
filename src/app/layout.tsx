import { mcn } from '@/lib/utils'
import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kinolib',
  description: 'Trang thông tin về phim',
  keywords: ['phim', 'phim hay', 'phim hot', 'phim mới']
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={mcn(
          inter.className,
          'min-h-screen antialiased bg-black text-white relative'
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
