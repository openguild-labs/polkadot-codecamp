import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Polkadot Hub CodeCamp | Build Once. Scale Everywhere.",
  description:
    "A 4-week online hackathon designed to discover and accelerate the most promising Web3 builders on Polkadot Hub",
  keywords: ["Polkadot", "Hackathon", "CodeCamp", "Blockchain", "Web3", "Hub", "2026"],
  openGraph: {
    title: "Polkadot Hub CodeCamp 2026",
    description:
      "A 4-week online hackathon designed to discover and accelerate the most promising Web3 builders on Polkadot Hub",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
