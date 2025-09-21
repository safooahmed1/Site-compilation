import watch from "../assets/pro1/wacht.png";
import fram1 from "../assets/pro1/fram1.png";
import fram2 from "../assets/pro1/fram2.png";
import starG from "../assets/pro1/star.png";
import starS from "../assets/pro1/Star.png";
import tag1 from "../assets/pro1/Tag.png";
import tag2 from "../assets/pro1/Tag-1.png";
import textC from "../assets/pro1/text.png";
import { FaClock } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { PiPlanetBold } from "react-icons/pi";

export default function EWatch() {
  return (
    <section className="h-screen w-full flex flex-row bg-white overflow-hidden">
      {/* section-01 - Content */}
      <div className="order-1 w-1/2 flex flex-col p-[64px] gap-9 ms-10 animate__animated animate__fadeInLeft ">
        {/* elsa3a eli btlf */}
        <span className="text-black text-xl relative w-[102px] h-[102px] ">
          <img
            src={textC}
            alt=""
            className="absolute animate-spin"
            style={{ animationDuration: "5s" }}
          />
          <div className="absolute top-10 left-10 ">
            <FaClock />
          </div>
        </span>

        {/* contnt */}
        <div className="flex flex-col gap-10">
          <h1 className="font-serif text-black font-bold leading-[80px] text-[64px] drop-shadow-[2px_5px_3px_rgba(0,0,0,9)]">
            THE eWatch with the newest microchip technology
          </h1>
          <p className="text-[#333333] text-[24px] drop-shadow-[5px_5px_15px_rgba(0,0,0,1)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget
            diam.
          </p>
          <div className="flex gap-8">
            <button className="px-[50px] py-[20px] text-[24px] rounded-3xl border-2 border-black bg-black hover:bg-white hover:text-black hover:border-2 duration-400">
              Order now
            </button>
            <button className="px-[50px] py-[20px] text-[24px] rounded-3xl border-2 text-black hover:bg-black hover:text-white duration-400">
              Explore more
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-xl text-black flex  border-2 border-black p-[24px] h-[117px] items-center  rounded-4xl ">
          <div className="px-8">
            <BsFillSunFill />
            <span>Lorem ipsu dolor amet</span>
          </div>
          <div className="px-8">
            <FaStar />
            <span>Lorem ipsu dolor amet</span>
          </div>
          <div className="px-8">
            <IoEye />
            <span>Lorem ipsu dolor amet</span>
          </div>
          <div className="px-8">
            <PiPlanetBold />
            <span>Lorem ipsu dolor amet</span>
          </div>
        </div>
      </div>

      {/* section-02 - Images */}
      <div className="order-2 w-1/2 relative flex items-center justify-center animate__animated animate__fadeInRight">
        <div className="relative w-[635.31px] h-[778.19px] flex items-center justify-center">
          {/* Chats */}
          <div>
            <img
              src={tag1}
              alt=""
              className="absolute z-30 bottom-30 left-0 animate-bounce"
            />
            <img
              src={tag2}
              alt=""
              className="absolute z-30 top-30 right-0 animate-bounce "
            />
          </div>

          {/* Stars */}
          <div>
            <img
              src={starG}
              alt=""
              className="absolute right-15 bottom-20 z-30 animate-pulse "
            />
            <img
              src={starS}
              alt=""
              className="absolute left-40 top-30 z-30 animate-pulse"
            />
          </div>

          {/* Main Watch - Center */}
          <img
            src={watch}
            alt="Smart Watch"
            className="absolute right-10 z-20 hover:scale-110 transition-transform duration-400"
          />

          {/* Frame 1 - Top Right */}
          <img
            src={fram1}
            alt="Watch Frame 1"
            className="absolute top-0 left-0 z-10"
          />

          {/* Frame 2 - Bottom Left */}
          <img
            src={fram2}
            alt="Watch Frame 2"
            className=" absolute bottom-0 right-0 z-10"
          />
        </div>
      </div>
    </section>
  );
}
