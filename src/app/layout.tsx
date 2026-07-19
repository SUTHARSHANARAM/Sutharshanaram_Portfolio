import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sutharshanaram R | AI & Data Science Graduate & Software Developer",
  description: "Portfolio of Sutharshanaram R, a B.Tech AI & Data Science graduate with double AI Internships, proficient in Flutter, Python, SQL, and QA diagnostics.",
  keywords: ["Sutharshanaram R", "Software Engineer", "AI & Data Science", "Portfolio", "Flutter", "Python", "React", "Next.js", "Nagapattinam"],
  authors: [{ name: "Sutharshanaram R" }],
  openGraph: {
    title: "Sutharshanaram R Portfolio",
    description: "Premium developer portfolio of Sutharshanaram R displaying software engineering and AI projects.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="bg-background text-foreground min-h-full font-sans antialiased bg-grid-pattern selection:bg-accent/20 selection:text-accent">
        {children}
      </body>
    </html>
  );
}
