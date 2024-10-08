import { ClerkProvider } from "@clerk/nextjs";

import Providers from "./providers";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CityGPT",
  description:
    "Welcome to CityGPT, your ultimate source for comprehensive and up-to-date city information powered by artificial intelligence. Our platform provides detailed insights into cities worldwide, making it easy for travelers, researchers, and urban planners to explore and understand urban environments like never before.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="dark">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
