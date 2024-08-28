import Link from "next/link";
import { SiOpenaigym } from "react-icons/si";

export default function Home() {
  return (
    <div className="bg-primary bg-opacity-25">
      <div className="hero min-h-screen bg-gradient-to-br from-neutral text-white">
        <SiOpenaigym className="fixed top-12 left-16 w-8 h-8 sm:w-12 sm:h-12 text-accent hover:animate-spin" />
        <div className="hero-content flex-col max-w-[calc(100%-32px)]">
          <h1 className="text-7xl sm:text-8xl font-bold text-primary">
            CityGPT
          </h1>
          <p className="w-full max-w-[480px] text-center text-md sm:text-lg leading-relaxed px-8 py-6">
            Welcome to CityGPT, your ultimate source for comprehensive and
            up-to-date city information powered by artificial intelligence.
          </p>
          <Link href="/chat" className="btn btn-secondary border border-accent">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
