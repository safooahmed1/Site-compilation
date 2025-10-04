import logo from "../assets/pro10/Cybertruck-Logo.png";
import logo2 from "../assets/pro10/car.png";
import car1 from "../assets/pro10/car1.png";
import car2 from "../assets/pro10/car2.png";
import car3 from "../assets/pro10/car3.png";
import swipe from "../assets/pro10/swipe.gif";
import bg from '../assets/pro10/bg.png'

export const Cybertruck = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden bg-white flex flex-col text-black ">
        {/* header */}
        <header className="flex flex-row items-center justify-between w-full h-1/12 px-9 ">
          <div className="logo w-40">
            <img src={logo} alt="" />
          </div>

          <nav className="flex justify-center gap-8 text-xl">
            <span>Home</span>
            <span>PIC</span>
            <span>About</span>
            <span>Link</span>
          </nav>

          <div className="">
            <img className="w-40" src={logo2} alt="" />
          </div>
        </header>

        {/* container */}
        <div className="bg-white h-11/12 pb-5">
          <div className="bg-gray-400 mx-5 rounded-4xl h-full flex flex-row ">
            {/* figure */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <img src={bg} alt="" className="fixed w-5/12" />
              <div
                className="card p-20"
                style={{
                  width: "70rem",
                  position: "relative",
                  border: 0,
                  height: "50rem",
                  aspectRatio:0 ,
                  boxShadow: "0"
                }}
              >
                <figure className="hover-gallery w-full p-5 h-[80rem]">
                  <img src={car1} className="scale-80" alt="" />
                  <img src={car1} className="scale-80" alt="" />
                  <img src={car2} alt="" />
                  <img src={car3} alt="" />
                </figure>
                <div className="card-body card-title">
                  <img src={swipe} alt="" className="w-30" />
                </div>
              </div>
            </div>
            {/* contant */}
            <div className="w-1/2 h-full  "></div>
          </div>
        </div>
      </div>
    </>
  );
};
