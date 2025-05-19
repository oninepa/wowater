import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Well Finder',
  description: 'Find wells and water sources in Africa and India',
  manifest: '/manifest.json',
  themeColor: '#4ade80',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-white">{children}</body>
    </html>
  )
}