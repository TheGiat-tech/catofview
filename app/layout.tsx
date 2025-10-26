import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cat of View - Your Feline Perspective",
  description: "Discover the world through the eyes of cats. Expert tips, product reviews, and heartwarming stories from the cat community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
