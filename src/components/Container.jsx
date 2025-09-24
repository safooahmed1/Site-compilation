import { Link } from "react-router-dom";
import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"
import pro3 from "../assets/pro3.png"
import pro4 from "../assets/pro4.png"
import pro5 from "../assets/pro5.png"


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
          Project 6
        </Link>
        <Link to="/project7" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 7
        </Link>
        <Link to="/project8" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 8
        </Link>
        <Link to="/project9" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 9
        </Link>
        <Link to="/project10" className="group w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/20 overflow-hidden text-white font-bold text-xl">
          Project 10
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
      </div>
    </>
  )
}
