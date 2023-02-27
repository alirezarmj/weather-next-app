import Image from "next/image";
import spinner from "../public/Loading_icon.gif";

const Spinner = () => {
  return (
    <>
      <Image
        src={spinner}
        className="w-[200px] m-auto block"
        alt="Loading..."
      />
    </>
  );
};

export default Spinner;
