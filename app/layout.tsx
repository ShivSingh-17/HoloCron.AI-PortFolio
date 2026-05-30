import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Background3D from "@/components/Background3D";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Shiv Prakash Singh | AI Engineer",
  description: "Cinematic 3D Star Wars Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Background3D />
        <CustomCursor />
        <Chatbot />
        {children}
      </body>
    </html>
  );
}
