const Title = ({
  className = "tracking-[1.62px] font-light text-white/55 text-[9px]",
  title,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h3 className={`uppercase text-center leading-none ${className}`}>
      {title}
    </h3>
  );
};

export default Title;
