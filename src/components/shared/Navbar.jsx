"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  // console.log(pathName);

  return (
    <nav className="bg-gray-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Next Nav
        </Link>
        <div className="space-x-6">
          <Link
            href="/about"
            className={
              pathName === "/about"
                ? " text-purple-300 shadow-md shadow-purple-400 font-bold cursor-pointer underline hover:text-gray-200 hover:underline"
                : "hover:text-gray-200"
            }
          >
            About Us
          </Link>
          <Link
            href="/gallery"
            className={
              pathName === "/gallery"
                ? " text-purple-300 shadow-md shadow-purple-400 font-bold cursor-pointer underline hover:text-gray-200 hover:underline"
                : "hover:text-gray-200"
            }
          >
            Gallery
          </Link>
          <Link
            href="/products"
            className={
              pathName === "/products"
                ? " text-purple-300 shadow-md shadow-purple-400 font-bold cursor-pointer underline hover:text-gray-200 hover:underline"
                : "hover:text-gray-200"
            }
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
