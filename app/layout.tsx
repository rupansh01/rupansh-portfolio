import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rupansh | AI Automation Engineer",
  description: "Designing production-grade AI automation systems using n8n, Python, APIs, LLMs and workflow orchestration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(inter.className, "noise-bg antialiased min-h-screen bg-background text-foreground flex flex-col")}>
        {children}
      </body>
    </html>
  );
}
