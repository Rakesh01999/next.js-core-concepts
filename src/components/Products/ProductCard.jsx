import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
      {/* Product Image */}
      <div className="relative w-full h-60">
        <Image
          src={product.image}
          alt={product.productName}
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900">{product.productName}</h2>

        {/* Brand & Category */}
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded">
            {product.brand}
          </span>
          <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded">
            {product.category}
          </span>
        </div>

        {/* Price */}
        <p className="text-lg font-semibold text-teal-600 mt-3">${product.price}</p>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-between">
          <Link
            href={`/product/${product.id}`}
            className="bg-black text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-800 transition"
          >
            See Details
          </Link>
          <button className="bg-teal-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-teal-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
