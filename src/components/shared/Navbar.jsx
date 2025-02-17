"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Next Nav
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-gray-200">
            About Us
          </Link>
          <Link href="/gallery" className="hover:text-gray-200">
            Gallery
          </Link>
          <Link href="/products" className="hover:text-gray-200">
            Products
          </Link>
          <Link href="/register" className="hover:text-gray-200">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
