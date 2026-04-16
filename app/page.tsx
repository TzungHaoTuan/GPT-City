import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Link from "next/link";
import { SiOpenaigym } from "react-icons/si";

export default async function Home() {
  const { userId } = await auth();
  console.log("useId:" + userId);
  if (userId) {
    redirect("/tours/new-tour");
  }
  return (
    <div className="bg-opacity-25 bg-primary">
      <div className="min-h-screen text-white hero bg-gradient-to-br from-neutral">
        <SiOpenaigym className="fixed w-8 h-8 top-12 left-16 sm:w-12 sm:h-12 text-accent hover:animate-spin" />
        <div className="hero-content flex-col max-w-[calc(100%-32px)]">
          <h1 className="font-bold text-7xl sm:text-8xl text-primary">
            CityGPT
          </h1>
          <p className="w-full max-w-[480px] text-center text-md sm:text-lg leading-relaxed px-8 py-6">
            Welcome to CityGPT, your ultimate source for comprehensive and
            up-to-date city information powered by artificial intelligence.
          </p>
          <Link
            href="/sign-in"
            className="border btn btn-secondary border-accent"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
