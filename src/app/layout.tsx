import CustomAnalytics from '@/components/shared/customAnalytics'

import './globals.css'
import { Inter } from 'next/font/google'
import dictionary from '@/languages/es'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
  openGraph: {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    images: [
      {
        url: dictionary.meta.logoUrl,
        width: 1600,
        height: 1000,
        alt: 'Stop Espacio Mad Cool',
      },
    ]
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={ inter.className }>
        {children}
        {<CustomAnalytics />}
      </body>
    </html>
  )
}
