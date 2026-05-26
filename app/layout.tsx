import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#c3e645" }
  ]
};
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SplashScreen } from "@/components/splash-screen";
import { SmoothScroll } from "@/components/smooth-scroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const siteUrl = "https://fariha-munir-prity.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fariha Munir Prity - UX/UI Designer",
    template: "%s | Fariha Munir Prity"
  },
  description:
    "Portfolio of Fariha Munir Prity, a UX/UI Designer focused on intuitive interfaces, modern visuals, and user-centered digital experiences.",
  keywords: [
    "Fariha Munir Prity",
    "UX/UI Designer",
    "UI Designer Bangladesh",
    "Figma Designer",
    "Product Designer",
    "Framece"
  ],
  authors: [{ name: "Fariha Munir Prity" }],
  creator: "Fariha Munir Prity",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Fariha Munir Prity - UX/UI Designer",
    description:
      "Modern UX/UI portfolio showcasing design systems, mobile apps, dashboards, and thoughtful product experiences.",
    siteName: "Fariha Munir Prity Portfolio",
    images: [
      {
        url: "/headshot.jpeg",
        width: 1200,
        height: 1600,
        alt: "Fariha Munir Prity"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fariha Munir Prity - UX/UI Designer",
    description:
      "UX/UI Designer focused on intuitive interfaces, modern visuals, and user-centered experiences.",
    images: ["/headshot.jpeg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <SmoothScroll>
          <SplashScreen />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
