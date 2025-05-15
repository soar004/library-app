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
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Solveigs digitale bibliotek</h1>
        <p className="text-lg mb-6">
          Velkommen til biblioteket mitt! Her finner du bøker jeg har samlet på
          lydbok og e-bok siden 2013. Biblioteket vil etter hvert også inkludere
          fysiske bøker, med informasjon om hvor de befinner seg – enten i min
          egen bokhylle eller hjemme hos mamma og pappa.
        </p>
        <p className="text-lg mb-8">
          Alle bøkene er enten digitale eller tilgjengelige for utlån med et
          klikk. Utforsk samlingen min under!
        </p>
        <Link href="/katalog" className="text-indigo-600 underline font-medium">
          Se bøker
        </Link>
      </section>

      <section className="flex justify-center mt-12">
        <Image
          src="/woman-reading-window.png"
          alt="Person som leser bok ved vinduet"
          width={400}
          height={400}
          className="max-w-xs md:max-w-md rounded shadow-lg"
        />
      </section>
    </main>
  );
}
