import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CityGPT",
  description:
    "Welcome to CityGPT, your ultimate source for comprehensive and up-to-date city information powered by artificial intelligence. Our platform provides detailed insights into cities worldwide, making it easy for travelers, researchers, and urban planners to explore and understand urban environments like never before.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
