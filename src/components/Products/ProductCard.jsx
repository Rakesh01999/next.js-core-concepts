import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300">
      <div className="relative w-full h-52 object-contain">
        <Image
          src={product.image}
          alt={product.productName}
          width={1500}
          height={800}
          className="rounded-t-lg h-56"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{product.productName}</h2>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <Link
            href={`/product/${product.id}`}
            className="bg-black text-white py-2 px-5 rounded-lg transition-all"
          >
            See Details
          </Link>
          <button className="bg-black text-white py-2 px-5 rounded-lg transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
