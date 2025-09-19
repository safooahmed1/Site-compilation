import Container from "../components/Container";
import Particles from "../components/Particles";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { BsMouse } from "react-icons/bs";

export default function HomePege() {
  return (
    <>
      {/* backgrond */}
      <Particles />
      <div className="z-10 flex flex-col items-center">
        {/* contnt */}
        <div className="text-center text-white w-full h-[70vh] flex flex-col justify-center">
          <h1 className="lg:text-6xl text-5xl  font-bold mb-4 animate-pulse limelight-regular font-[Limelight] ">
            Welcome to My Website 👋
          </h1>
          <p className=" text-xl  mb-8 flex flex-col lg:gap-3 gap-8">
            On this site there is a collection of other sites developed by Saif
            Ahmed. <br /> There are more than 30 different designs. <br />
            <a
              href="#cont"
              className="hover:text-blue-400 hover:font-semibold transition-all duration-300 underline decoration-2 underline-offset-4 hover:decoration-blue-400"
            >
              See below
            </a>
            {/* scroll icon */}
            <div className="flex flex-col justify-center items-center">
              <BsMouse className="text-2xl mb-1 animate-bounce" />
              <MdKeyboardDoubleArrowDown className="text-3xl animate-bounce" />
            </div>
          </p>
        </div>
        {/* the sits container */}
        <Container />
      </div>
    </>
  );
}
