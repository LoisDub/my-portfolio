import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoisDub — Full Stack Engineer",
  description:
    "Thoughtful code. Meaningful experiences. Explore LoisDub’s full-stack engineering work, interface explorations, and technical toolkit.",
  openGraph: {
    title: "LoisDub — Full Stack Engineer",
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
