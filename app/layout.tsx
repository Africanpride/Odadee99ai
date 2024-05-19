import type { Metadata } from "next";
import { sourceCodePro400, inter } from "@/utils/styles/fonts";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PrelineScript from "@/components/PrelineScript";
import { keywords } from "@/utils/SEO";


export const metadata = {
  metadataBase: new URL('https://www.odadee99ai.net'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    },
  },
  formatDetection: {
    email: "info@odadee99ai.net",
    address: "7P.O. Box LG 98, Legon, Accra. Ghana",
    telephone: "+27 633 817 805",
  },
  title: {
    default: 'Presec 1999 eXperience Centre',
  },
  description:
    "Presec 1999 eXperience Centre in sandton, Johannesburg offers a wide range of hair services, including blowouts, weaves, braids, treatments, and more.",
  keywords: keywords.join(", "),
  siteName: "Presec 1999 eXperience Centre",

  authors: [
    { name: 'Pius Opoku-Fofie'}
  ],

  image: "../public/hair-tools.jpg",
  url: "https://www.odadee99ai.net",
  type: "website",
  locale: "en_US",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.odadee99ai.net",
    title: "Presec 1999 eXperience Centre",
    description:
      "Discover the best hair services at Presec 1999 eXperience Centre in Johannesburg. From stylish blowouts to trendy weaves and braids, we've got your hair needs covered.",
    image: "../public/hair-tools.jpg",
    site_name: "Presec 1999 eXperience Centre",
  },
  // Add more specific Twitter Card tags for Twitter sharing
  // twitter: {
  //   cardType: "summary_large_image",
  //   handle: "@yourtwitterhandle",
  // },
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
