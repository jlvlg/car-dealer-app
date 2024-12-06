import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Make a Deal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-slate-200">{children}</body>
    </html>
  );
}
