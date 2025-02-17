"use client";
const ErrorPage = ({ error, reset }) => {
  console.log(error);
  console.log(reset);
  return (
    <div className="text-3xl text-center text-red-600 font-bold my-auto">
      <h1>Something Went Wrong !!</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-red-400 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-800 transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
