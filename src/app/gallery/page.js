import Image from "next/image";
// import nextImage from "../../assets/next image.png";
import nextImage from "@/assets/next image.png";
import Navbar from "@/components/Navbar";
const GalleryPage = () => {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="text-2xl text-center">Regular Image Tag</h1>
      <img
        src="https://nextjs.org/api/docs-og?title=Optimizing%20Images"
        alt=""
        width={500}
        height={500}
        className="mx-auto"
      />
      <h1 className="text-2xl text-center">NextJs Image Component</h1>
      <Image
        src="https://nextjs.org/api/docs-og?title=Optimizing%20Images"
        alt="Next Image"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h1 className="text-2xl text-center">Local Image Component</h1>
      <Image
        src={nextImage}
        alt="Next Image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
