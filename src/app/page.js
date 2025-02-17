import ProductCard from "@/components/Products/ProductCard";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    // cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const products = await res.json();
  // console.log(products)
  return (
    <div className="text-center text-4xl my-5">
      <h1>Data Fetching, Caching and Revalidating</h1>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto mt-10">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="my-6">
        <Link
          href={`/products`}
          className="bg-orange-400 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-800 transition"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
