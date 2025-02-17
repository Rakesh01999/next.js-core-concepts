import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-2xl text-center">Regular Image Tag</h1>
      <img
        src="https://nextjs.org/api/docs-og?title=Optimizing%20Images"
        alt=""
        width={500}
        height={500}
        className="mx-auto"
      />
      <h1 className="text-2xl text-center">Next Image Tag</h1>
      <Image
        src="https://nextjs.org/api/docs-og?title=Optimizing%20Images"
        alt="Next Image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
