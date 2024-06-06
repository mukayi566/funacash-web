interface LogoWallProps {
    src1: string;
    alt1: string;
  }
  
  function LogoWall({ src1, alt1 }: LogoWallProps) {
    return (
      <article className="mb-8 flex justify-center gap-8 text-center ">
        <img src={src1} alt={alt1} className="w-24 md:w-36" />

      </article>
    );
  }
  
  export default LogoWall;
  