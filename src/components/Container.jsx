import { Link } from "react-router-dom";
import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"
import pro3 from "../assets/pro3.png"
import pro4 from "../assets/pro4.png"
import pro5 from "../assets/pro5.png"
import pro6 from "../assets/pro6.png"
import pro7 from "../assets/pro7.png"
import pro8 from "../assets/pro8.png"
import pro9 from "../assets/pro9.png"


export default function Container() {
  return (
    <>
      <div id="cont" className="bg-white/10 w-11/12 px-20 py-10 mb-10 grid-cols-1 lg:grid-cols-3 gap-8 grid rounded-2xl backdrop-blur-sm border border-white/20 shadow-2xl justify-items-center ">
        <h2 className="col-span-1 lg:col-span-3 text-center text-white text-3xl font-bold mb-8">
          My Projects Collection
        </h2>
        <Link to="/eWatch" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden">
          <img src={pro1} alt="Project preview" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110" />
        </Link>
        <Link to="/coffee" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
        <img src={pro2} alt="Project preview" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110" />
        </Link>
        <Link to="/TheCreativeGateway" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
        <img src={pro3} alt="Project preview" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110" />
        </Link>
        <Link to="/burgerz" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
        <img src={pro4} alt="Project preview" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110" />
        </Link>
        <Link to="/healthyFood" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
        <img src={pro5} alt="Project preview" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110" />
        </Link>
        <Link to="/loginPage" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
        <img src={pro6} alt="Project preview" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110" />
        </Link>
        <Link to="/nintando" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
        <img src={pro7} alt="Project preview" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110" />
        </Link>
        <Link to="/marwan-pablo" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
        <img src={pro8} alt="Project preview" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110" />
        </Link>
        <Link to="/japan" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
        <img src={pro9} alt="Project preview" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110" />
        </Link>
        <Link to="/Cybertruck" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Cybertruck
        </Link>
        <Link to="/project11" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 11
        </Link>
        <Link to="/project12" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 12
        </Link>
        <Link to="/project13" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 13
        </Link>
        <Link to="/project14" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 14
        </Link>
        <Link to="/project15" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 15
        </Link>
        <Link to="/project16" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 16
        </Link>
        <Link to="/project17" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 17
        </Link>
        <Link to="/project18" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 18
        </Link>
        <Link to="/project19" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 19
        </Link>
        <Link to="/project20" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 20
        </Link>
        <Link to="/project21" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 21
        </Link>
        <Link to="/project22" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 22
        </Link>
        <Link to="/project23" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 23
        </Link>
        <Link to="/project24" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 24
        </Link>
        <Link to="/project25" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 25
        </Link>
        <Link to="/project25" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 26
        </Link>
        <Link to="/project25" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 27
        </Link>
      </div>
    </>
  )
}
