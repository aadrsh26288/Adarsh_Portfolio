import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adarsh Mishra - Frontend Developer",
  description:
    "Frontend Developer with 2 years of professional experience building high-performance web applications using Next.js, React, and TypeScript.",
  keywords: [
    "Adarsh Mishra",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Adarsh Mishra" }],
  openGraph: {
    title: "Adarsh Mishra - Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Mishra - Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
