import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Presentation Slideshow',
  description: 'Custom presentation slideshow with clicker support',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
