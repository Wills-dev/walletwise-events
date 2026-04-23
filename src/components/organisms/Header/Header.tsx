import HeaderSide from "@/components/molecules/HeaderSide/HeaderSide";
import Container from "../../atoms/Container/Container";
import Title from "@/components/atoms/Title/Title";

const Header = () => {
  return (
    <div className="bg-[#706860]">
      <Container className="">
        <header className="w-full flex justify-between items-center h-24.25">
          <HeaderSide
            title="Musik Lab"
            name="Sensei"
            imgUrl="/assets/images/triangle.svg"
            alt="Triangle"
          />
          <div className="flex-1 w-full flex justify-center items-center flex-col border-x border-white/20 h-full gap-1">
            <Title
              title="Collaboration 01"
              className="sm:text-[9px] text-[7px] leading-none font-light tracking-[3.15px] text-white/55"
            />
            <Title
              title="Sensei Musik Lab / Clint Entertainment"
              className="sm:text-[11px] text-[9px] leading-none tracking-[3.3px] font-light text-white"
            />
            <Title
              title="Presents"
              className="sm:text-[9px] text-[7px] leading-none font-light tracking-[3.15px] text-white/55"
            />
          </div>
          <HeaderSide
            title="Entertainment"
            name="Clint's"
            imgUrl="/assets/images/star.svg"
            alt="Star"
          />
        </header>
      </Container>
    </div>
  );
};

export default Header;
