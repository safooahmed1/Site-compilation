import bg from "../assets/pro6/Backdrop.png";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function LoginPage() {
  let parentStyle = {
    color: "#fff",
    backgroundImage: `url(${bg})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div style={parentStyle} className="overflow-hidden cursor-default">
        {/* card */}
        <div className="w-[500px] px-[64px] py-[48px] bg-white/25 backdrop-brightness-90 border border-white/20 shadow-2xl rounded-xl animate__animated animate__backInUp ">
          {/* container */}
          <div className="flex flex-col gap-[40px] ">
            {/* switcher */}
            <div className=" w-full text-white shadow-2xl flex justify-center items-center ">
              <span className="bg-transparent backdrop-blur-sm border border-white/20  flex-1 p-3 rounded-s-xl text-center ">
                Log in
              </span>
              <span className=" backdrop-blur-sm border border-white/20  flex-1 p-3 bg-black/40 rounded-e-xl text-center cursor-not-allowed ">
                Sign up
              </span>
            </div>

            {/* form */}
            <div className=" flex flex-col gap-6 justify-center items-center ">
              <h2 className="text-[25px] ">Welcome</h2>
              <div className="flex flex-row gap-4">
                <div className="text-[35px] text-white backdrop-blur-sm border border-white/20 shadow-2xl  p-3 rounded-full w-full transition active:bg-black/40 active:scale-90  hover:scale-110 hover:cursor-pointer ">
                  <FaFacebook />
                </div>
                <div className="text-[35px] text-white backdrop-blur-sm border border-white/20 shadow-2xl  p-3 rounded-full w-full transition active:bg-black/40 active:scale-90  hover:scale-110 hover:cursor-pointer">
                  <FaGoogle />
                </div>
                <div className="text-[35px] text-white backdrop-blur-sm border border-white/20 shadow-2xl  p-3 rounded-full w-full transition active:bg-black/40 active:scale-90  hover:scale-110 hover:cursor-pointer">
                  <FaGithub />
                </div>
              </div>
              <div className="divider text-white">OR</div>
              {/* formBgd */}
              <div className="flex flex-col gap-5  ">
                <input
                  type="text"
                  className="p-3 flex-1 w-full rounded-xl bg-transparent backdrop-blur-sm border border-white/20 shadow-2xl transition active:bg-black/40 active:scale-90  hover:scale-110 hover:cursor-pointer focus:outline-0"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="p-3 flex-1 w-full rounded-xl bg-transparent backdrop-blur-sm border border-white/20 shadow-2xl transition active:bg-black/40 active:scale-90  hover:scale-110 hover:cursor-pointer  focus:outline-0"
                  // placeholder="Password"
                  placeholder="password"
                />
                <div className="w-full justify-start">
                  <span className="hover:underline hover:cursor-pointer active:text-black/40">forget password ?</span>
                </div>
              </div>
              <button className="bg-transparent backdrop-blur-sm border border-white/20 shadow-2xl  text-[#fff] text-[22px] rounded-[40px] w-full h-[64px] text-center transition active:bg-black/40 active:scale-90  hover:scale-110 hover:cursor-pointer ">
                Sing up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
