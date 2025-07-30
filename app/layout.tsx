import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Pier Compliance - Professional Regulatory Compliance Services',
  description: 'Expert compliance consulting services for GPSR, ESPR, KKDIK, REACH, Biocidal regulations. Professional regulatory affairs and product safety solutions.',
  keywords: 'compliance consulting, regulatory affairs, GPSR, ESPR, KKDIK, REACH, biocidal, product safety, regulatory compliance, Istanbul, Turkey',
  authors: [{ name: 'Pier Compliance' }],
  creator: 'Pier Compliance',
  publisher: 'Pier Compliance',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://piercompliance.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pier Compliance - Professional Regulatory Compliance Services',
    description: 'Expert compliance consulting services for GPSR, ESPR, KKDIK, REACH, Biocidal regulations. Professional regulatory affairs and product safety solutions.',
    url: 'https://piercompliance.com',
    siteName: 'Pier Compliance',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pier Compliance - Professional Compliance Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pier Compliance - Professional Regulatory Compliance Services',
    description: 'Expert compliance consulting services for GPSR, ESPR, KKDIK, REACH, Biocidal regulations.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 