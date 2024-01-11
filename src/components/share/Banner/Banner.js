import Image from "next/image";

const Banner = ({ src }) => {
  return (
    <div className="mt-8">
      <Image
        src={src}
        alt="ads"
        width={0}
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
};

export default Banner;
