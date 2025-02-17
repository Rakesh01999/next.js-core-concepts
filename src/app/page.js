
const HomePage = async() => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  // console.log(products)
  return (
    <div className="text-center text-4xl my-5">
      <h1>Data Fetching, Caching and Revalidating</h1>
    </div>
  );
};

export default HomePage;
