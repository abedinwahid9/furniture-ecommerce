import Image from "next/image";
import Title from "../../Title/Title";
import cover1 from "@/asset/cover1.jpg";

const Whoarewe = () => {
  return (
    <div className=" py-10 px-10 relative">
      <Title title="WHO ARE WE" width="w-[48%] md:w-[25%]" />
      <Image
        src={cover1}
        alt="cover"
        className="my-5 w-[100%] md:h-[300px] h-[150px] mt-14"
      />
      <p className="text-center p-5 text-sm text-secondaryColor">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.c
      </p>
    </div>
  );
};

export default Whoarewe;
