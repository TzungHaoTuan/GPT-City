import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ToastProvider from "./provider";

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
          <div className=" z-10">
            <Link href="/" className="btn btn-primary absolute left-20 top-12">
              Home
            </Link>
            <div className="absolute right-20 top-12">
              <SignedOut>
                <div className="btn btn-primary">
                  <SignInButton />
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            <ToastProvider>{children}</ToastProvider>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
