import Image from "next/image";
import Title from "../../atoms/Title/Title";

const HeaderSide = ({
  imgUrl,
  alt,
  name,
  title,
}: {
  imgUrl: string;
  alt: string;
  name: string;
  title: string;
}) => {
  return (
    <div className="lg:max-w-45 max-w-32 max-md:hidden w-full h-full flex items-center justify-center flex-col gap-1">
      <div className="w-5.5 h-5.5">
        <Image
          src={imgUrl}
          width={22}
          height={22}
          alt={alt}
          className="object-contain"
        />
      </div>
      <Title
        title={name}
        className="text-[10px] tracking-[2.2px] font-semibold text-white"
      />
      <Title title={title} />
    </div>
  );
};

export default HeaderSide;
