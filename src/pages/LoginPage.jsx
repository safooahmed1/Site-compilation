import bg from "../assets/pro6/Backdrop.png";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  let parentStyle = {
    color: "#000",
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
      <div style={parentStyle}>
        {/* card */}
        <div className="px-[64px] py-[48px] bg-white/20 backdrop-brightness-90 border border-white/20 shadow-2xl rounded-xl ">
          {/* container */}
          <div className="flex flex-col gap-[40px] ">
            {/* switcher */}
            <div className="w-[604px] text-white flex justify-center items-center ">
              <span className="flex-1 p-3 bg-black rounded-s-xl text-center">
                Sign up
              </span>
              <span className="flex-1 p-3 bg-black/40 rounded-e-xl text-center ">
                Log in
              </span>
            </div>

            {/* form */}
            <div className="mx-[74px] flex flex-col gap-10 justify-center items-center ">
              <h2 className="text-[24px] text-black">Sign up</h2>
              <div className="flex flex-col gap-4">
                <div className="border-1 border-[#333333] text-[#333333] rounded-[40px] w-[454px] h-[64px] flex items-center  justify-center gap-8 ">
                  <div className="text-xl text-[#333333]">
                    <FaFacebook />
                  </div>
                  <span>Sing up with Facebook</span>
                </div>
                <div className="border-1 border-[#333333] text-[#333333] rounded-[40px] w-[454px] h-[64px] flex items-center  justify-center gap-8 ">
                  <div className="text-xl text-[#333333]">
                    <FaGoogle />
                  </div>
                  <span>Sing up with Google</span>
                </div>
              </div>
              <div className="divider divider-neutral">OR</div>
              {/* formBgd */}
              <div className="flex flex-col gap-4  ">
                <div className="flex flex-row gap-4 ">
                  <fieldset className="fieldset w-1/2">
                    <legend className="fieldset-legend ">
                      Farst name
                    </legend>
                    <input
                      type="text"
                      className="input w-full bg-transparent border-1 rounded-xl border-[#333]"
                      placeholder="Type here"
                    />
                  </fieldset>
                  <fieldset className="fieldset w-1/2">
                    <legend className="fieldset-legend ">
                      Last name
                    </legend>
                    <input
                      type="text"
                      className="input w-full bg-transparent border-1 rounded-xl border-[#333]"
                      placeholder="Type here"
                    />
                  </fieldset>
                 
                </div>
                 <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend ">
                      Your email address
                    </legend>
                    <input
                      type="text"
                      className="input w-full bg-transparent border-1 rounded-xl border-[#333]"
                      placeholder="Type here"
                    />
                  </fieldset>
              </div>
              <button className=" bg-black/40 text-[#fff] text-[22px] rounded-[40px] w-full h-[64px] text-center">
                Sing up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
