import type { Metadata } from "next";
// @ts-ignore Next.js handles this CSS side-effect import during builds.
import "./globals.css";

export const metadata: Metadata = {
  title: "LoisDub — Developer",
  description:
    "Thoughtful code. Meaningful experiences. Explore LoisDub’s developer work, interface explorations, and technical toolkit.",
  openGraph: {
    title: "LoisDub — developer",
    description:
      "Thoughtful code. Meaningful experiences. A portfolio of development and interface explorations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
