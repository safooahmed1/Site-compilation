import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import bg from "../assets/pro6/Backdrop.png";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  let hundlingSupmit = (values) => {
    let domain = "http://82.112.241.233:1993/";
    let endPoint = "api/auth/Local";
    let url = domain + endPoint;
    

    let data = {
      identifier: values.email,
      password: values.password,
    };

    axios
      .post(url, data)
      .then((res) => {
        let tokin = res.data.jwt
        toast.success("Success Login")
        sessionStorage.setItem('jwt', tokin )
        navigate("/Home")
      })
      .catch((err) => {
        toast.error(err.response.data.error.message)
      });

    // console.log(data);
  };

  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

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
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={hundlingSupmit}
              >
                <Form className="flex flex-col gap-5  w-full ">
                  <Field
                    name="email"
                    type="text"
                    className="p-3 flex-1 w-full rounded-xl bg-transparent backdrop-blur-sm border border-white/20 shadow-2xl transition active:bg-black/40 active:scale-90  hover:scale-110 hover:cursor-pointer focus:outline-0"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component={"p"}
                    className="text-red-500"
                  />
                  <Field
                    name="password"
                    type="password"
                    className="p-3 flex-1 w-full rounded-xl bg-transparent backdrop-blur-sm border border-white/20 shadow-2xl transition active:bg-black/40 active:scale-90  hover:scale-110 hover:cursor-pointer  focus:outline-0"
                    placeholder="password"
                  />
                  <ErrorMessage
                    name="password"
                    component={"p"}
                    className="text-red-500"
                  />

                  <div className="w-full justify-start">
                    <span className="hover:underline hover:cursor-pointer active:text-black/40">
                      forget password ?
                    </span>
                  </div>
                  <button className="bg-transparent backdrop-blur-sm border border-white/20 shadow-2xl  text-[#fff] text-[22px] rounded-[40px] w-full h-[64px] text-center transition active:bg-black/40 active:scale-90  hover:scale-110 hover:cursor-pointer ">
                    Sing up
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
