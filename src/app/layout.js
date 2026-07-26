// src/app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Suzangaron Restaurant | Ресторан в Бухаре',
    template: '%s | Suzangaron Restaurant'
  },
  description: 'Ресторан и терраса с панорамным видом на Старую Бухару. Узбекская и европейская кухня. Бронирование столиков +998 91 922 2900',
  keywords: ['Suzangaron', 'ресторан Бухара', 'узбекская кухня', 'европейская кухня', 'ресторан с видом', 'Bukhara restaurant', 'Suzangaron Restaurant'],
  authors: [{ name: 'Suzangaron Restaurant' }],
  creator: 'Suzangaron Restaurant',
  publisher: 'Suzangaron Restaurant',
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
  openGraph: {
    title: 'Suzangaron Restaurant | Ресторан в Бухаре',
    description: 'Ресторан и терраса с панорамным видом на Старую Бухару. Узбекская и европейская кухня.',
    url: 'https://suzangaron.uz',
    siteName: 'Suzangaron Restaurant',
    images: [
      {
        url: '/images/logo.PNG',
        width: 512,
        height: 512,
        alt: 'Suzangaron Restaurant Logo',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suzangaron Restaurant | Ресторан в Бухаре',
    description: 'Ресторан и терраса с панорамным видом на Старую Бухару. Узбекская и европейская кухня.',
    images: ['/images/logo.PNG'],
    creator: '@suzangaron',
  },
  icons: {
    icon: '/images/logo.PNG',
    shortcut: '/images/logo.PNG',
    apple: '/images/logo.PNG',
    other: {
      rel: 'apple-touch-icon',
      url: '/images/logo.PNG',
    },
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#c9a96e',
  colorScheme: 'light',
  alternates: {
    canonical: 'https://suzangaron.uz',
    languages: {
      'ru': 'https://suzangaron.uz',
      'en': 'https://suzangaron.uz/en',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/images/logo.PNG" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.PNG" />
        <link rel="shortcut icon" href="/images/logo.PNG" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Schema.org структурированные данные */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Suzangaron Restaurant",
              "description": "Ресторан и терраса с панорамным видом на Старую Бухару",
              "image": "/images/logo.PNG",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bukhara",
                "addressCountry": "Uzbekistan"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "39.774556",
                "longitude": "64.416762"
              },
              "url": "https://suzangaron.uz",
              "telephone": "+998919222900",
              "servesCuisine": ["Uzbek", "European"],
              "priceRange": "$$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "11:00",
                  "closes": "03:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/suzangaron.restaurant/"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}