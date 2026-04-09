import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Professional Pizza Oven & Kitchen Cleaning | Total Restaurant Care",
  description:
    "Expert commercial kitchen cleaning services for restaurant chains. Pizza Hut approved. Conveyor oven cleaning, hood cleaning, and maintenance services in MD, DC, VA.",
  keywords:
    "restaurant cleaning, pizza oven cleaning, commercial kitchen cleaning, hood cleaning, Maryland, DC, Virginia",
  openGraph: {
    title: "Professional Pizza Oven & Kitchen Cleaning | Total Restaurant Care",
    description:
      "Expert commercial kitchen cleaning services trusted by Pizza Hut, Dominos, Papa Johns.",
    type: "website",
    images: [
      {
        url: "https://totalrestaurantcare.lockstepmedia.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Total Restaurant Care - Professional Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Pizza Oven & Kitchen Cleaning | Total Restaurant Care",
    description:
      "Expert commercial kitchen cleaning services trusted by Pizza Hut, Dominos, Papa Johns.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${playfair.variable} ${poppins.variable} font-sans antialiased bg-white`}
      >
        <main className="bg-white">{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Total Restaurant Care",
              image: "https://totalrestaurantcare.lockstepmedia.com/logo.png",
              description: "Professional commercial kitchen cleaning services",
              url: "https://totalrestaurantcare.lockstepmedia.com",
              telephone: "(410) 555-1234",
              areaServed: ["MD", "DC", "VA"],
              priceRange: "$$",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
