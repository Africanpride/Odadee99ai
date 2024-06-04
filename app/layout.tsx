import type { Metadata } from "next";
import { sourceCodePro400, inter } from "@/utils/styles/fonts";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PrelineScript from "@/components/PrelineScript";
import { keywords } from "@/components/SEO";


export const metadata = {
  metadataBase: new URL('https://www.odadee99ai.net'),
  alternates: { 
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    },
  },
  formatDetection: {
    email: "Odade3.99alumni@gmail.com",
    address: "P.O. Box LG 98, Legon, Accra, Ghana",
    telephone: "+233 24 484 4893",
  },
  title: {
    default: 'Presec 1999 eXperience Centre',
  },
  description:
    "Join the Presec 1999 Year Group as we embark on an inspiring journey to establish the Presec 1999 eXperience Centre, an AI lab dedicated to empowering future generations.",
  keywords: [
    "Presec 1999 eXperience Centre",
    "Artificial Intelligence Lab",
    "Presec Legon",
    "AI education",
    "Alumni project",
    "STEM education",
    "Sustainability",
    "Educational innovation",
    "AI lab Ghana",
    "Presec alumni",
    "Odadee 99 Year Group"
  ].join(", "),
  siteName: "Presec 1999 eXperience Centre",

  authors: [
    { name: 'Pius Opoku-Fofie' }
  ],

  image: "../public/ai-lab.jpg",
  url: "https://www.odadee99ai.net",
  type: "website",
  locale: "en_US",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.odadee99ai.net",
    title: "Presec 1999 eXperience Centre",
    description:
      "Discover the transformative impact of the Presec 1999 eXperience Centre, a cutting-edge AI lab fostering innovation and education for future leaders.",
    image: "../public/ai-lab.jpg",
    site_name: "Presec 1999 eXperience Centre",
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@Odadee99",
    title: "Presec 1999 eXperience Centre",
    description: "Support the Presec 1999 eXperience Centre and help empower the next generation with AI and technology skills.",
    image: "../public/ai-lab.jpg",
  },

};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${sourceCodePro400.className} overflow-x-hidden relative  bg-base-100  `}
      >
        <NavBar />
        {children}

        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
