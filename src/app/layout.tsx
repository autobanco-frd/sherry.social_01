// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Send Me Coffee ☕ | Mini-App Web3",
  description: "Haz click en un mensaje y envíame un café en AVAX desde cualquier plataforma.",
  openGraph: {
    title: "Send Me Coffee ☕",
    description: "Haz click aquí para enviarme 0.01 AVAX como café",
    url: "https://coffebyautobanco-n8pelpbb3-autobancos-projects-16cfe497.vercel.app ",
    siteName: "Coffee Tip Mini-App",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/174357246",
        width: 460,
        height: 460,
        alt: "☕",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Send Me Coffee ☕",
    description: "Haz click aquí para enviarme 0.01 AVAX como café",
    images: ["https://avatars.githubusercontent.com/u/174357246"],
    creator: "@autobanco",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        {/* Meta Tags para Preview Social */}
        <meta property="og:title" content="Send Me Coffee ☕" />
        <meta property="og:description" content="Haz click aquí para enviarme 0.01 AVAX" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/174357246" />
        <meta property="og:url" content="https://coffebyautobanco-n8pelpbb3-autobancos-projects-16cfe497.vercel.app " />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Send Me Coffee ☕" />
        <meta name="twitter:description" content="Haz click aquí para enviarme 0.01 AVAX como café" />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/174357246" />
        <meta name="twitter:creator" content="@autobanco" />
      </head>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}