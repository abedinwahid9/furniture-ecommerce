import Image from "next/image";
import FuLogo from "@/asset/furni.png";

const Logo = () => {
  return (
    <div className="bg-mainColor drop-shadow-lg flex justify-center">
      <Image src={FuLogo} width={120} height={120} className="my-5" />
    </div>
  );
};

export default Logo;
