import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hero Showcase",
  description: "Five hero-section explorations for a motion design reel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
