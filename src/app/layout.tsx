import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Satisfy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
});

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "HMk Borhan Uddin | AI Automation Specialist & Full-Stack Developer",
  description: "Portfolio of HMk Borhan Uddin: Engineering Autonomous AI Agents, Scalable Full-Stack Web Applications & High-Converting Meta Marketing Funnels.",
  keywords: [
    "HMk Borhan Uddin",
    "AI Automation",
    "Next.js Developer",
    "Full-Stack Developer",
    "Meta Ads Automation",
    "Telegram Bots",
    "Python AI",
    "Bangladesh",
  ],
  authors: [{ name: "HMk Borhan Uddin" }],
  openGraph: {
    title: "HMk Borhan Uddin | AI Automation Specialist & Full-Stack Developer",
    description: "Engineering Autonomous AI Agents, Scalable Full-Stack Web Apps & Meta Funnels.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${satisfy.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#08090a] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
