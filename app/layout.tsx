import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huzaifa Ahmed | Full Stack Developer & Mobile App Developer",
  description:
    "Professional portfolio of Huzaifa Ahmed - Full Stack Developer specializing in React, Next.js, Node.js, and React Native mobile applications.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Mobile App Developer",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Huzaifa Ahmed" }],
  creator: "Huzaifa Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://huzaifaahmed.dev",
    title: "Huzaifa Ahmed | Full Stack Developer",
    description:
      "Professional portfolio showcasing full-stack and mobile development projects",
    siteName: "Huzaifa Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huzaifa Ahmed | Full Stack Developer",
    description:
      "Professional portfolio showcasing full-stack and mobile development projects",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

