import ProductCard from "@/components/Products/ProductCard";

export const metadata = {
  title: "All Products",
  description: "This is All Products page",
};

const AllProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();
  // console.log(products);

  return (
    <div>
      <h1 className="text-xl text-center">All Products Page</h1>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto my-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
