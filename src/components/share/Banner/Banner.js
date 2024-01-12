import Image from "next/image";

const Banner = ({ src }) => {
  return (
    <div className="mt-8">
      <Image
        src={src}
        alt="ads"
        width={0}
        className="w-full md:h-[400px] h-[200px]"
      />
    </div>
  );
};

export default Banner;
