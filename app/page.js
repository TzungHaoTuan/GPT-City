import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-neutral text-white">
      <div className="hero-content flex-col max-w-md">
        <h1 className="text-6xl font-bold">CityGPT</h1>
        <div>
          <p className="text-center text-lg leading-relaxed py-6">
            Welcome to CityGPT, your ultimate source for comprehensive and
            up-to-date city information powered by artificial intelligence.
          </p>
        </div>
        <Link href="/chat" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  );
}
