import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700', '900'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Total Restaurant Care | Professional Kitchen Cleaning',
  description: 'Expert commercial kitchen and pizza oven cleaning services trusted by major restaurant chains.',
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} font-sans antialiased bg-white`}
      >
        {children}

        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              'name': 'Total Restaurant Care',
              'image': 'https://totalrestaurantcare.com/logo.png',
              'description': 'Professional commercial kitchen cleaning services',
              'url': 'https://totalrestaurantcare.com',
              'telephone': '(410) 555-1234',
              'areaServed': ['MD', 'DC', 'VA'],
              'priceRange': '$$',
              'sameAs': [],
            }),
          }}
        />
      </body>
    </html>
  )
}
