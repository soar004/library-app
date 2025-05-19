import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
      <div className="flex items-center gap-8 text-gray-700 text-sm font-medium">
        <Link href="/" className="hover:text-purple-600 transition-colors">
          Home
        </Link>
        <Link
          href="/catalog"
          className="hover:text-purple-600 transition-colors"
        >
          Catalog
        </Link>
        <Link href="#" className="hover:text-purple-600 transition-colors">
          About
        </Link>
        <Link href="#" className="hover:text-purple-600 transition-colors">
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-colors"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
