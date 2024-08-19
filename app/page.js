import Link from "next/link";
import { SiOpenaigym } from "react-icons/si";

export default function Home() {
  return (
    <div className="bg-primary bg-opacity-25">
      <div className="hero min-h-screen bg-gradient-to-br from-neutral text-white">
        <SiOpenaigym className="fixed top-12 left-16 w-12 h-12 text-accent hover:animate-spin" />
        <div className="hero-content flex-col max-w-[500px]">
          <h1 className="text-8xl font-bold text-primary">CityGPT</h1>
          <div>
            <p className="text-center text-xl leading-relaxed py-6">
              Welcome to CityGPT, your ultimate source for comprehensive and
              up-to-date city information powered by artificial intelligence.
            </p>
          </div>
          <Link href="/chat" className="btn btn-secondary border border-accent">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
