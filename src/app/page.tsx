import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Background */}

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 p-12 md:p-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Library
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your personal book catalog — discover, track, and explore everything
            you read.
          </p>
          <Link
            href="/books"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition"
          >
            Browse Books
          </Link>
        </div>

        <Image
          src="/woman-reading-window.png"
          alt="Bookshelf illustration"
          className="h-auto"
          width={600}
          height={400}
          priority
        />
      </section>
    </main>
  );
}
