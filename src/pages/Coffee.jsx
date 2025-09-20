import bg from "../assets/pro2/bg-coffee.jpg";
import icon from "../assets/pro2/Insights.png"

export default function Coffee() {
  return (
    <>
      <style>
        {`
          ::selection {
            background-color: #EDBC81;
            color: white;
          }
          ::-moz-selection {
            background-color: #EDBC81;
            color: white;
          }
          
          @keyframes slideInFromLeft {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @keyframes slideInFromBottom {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          
          @keyframes blink {
            0%, 50% {
              border-color: transparent;
            }
            51%, 100% {
              border-color: #EDBC81;
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(237, 188, 129, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(237, 188, 129, 0.6);
            }
          }
          
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .card-1 {
            animation: slideInFromLeft 1s ease-out;
            transition: all 0.3s ease;
          }
          
          .card-1:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
          
          .card-2 {
            animation: slideInFromBottom 1s ease-out 0.5s both;
            transition: all 0.3s ease;
          }
          
          .card-2:hover {
            transform: translateY(-5px) scale(1.01);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          }
          

          
          .floating-button {
            animation: float 3s ease-in-out infinite;
            transition: all 0.3s ease;
          }
          
          .floating-button:hover {
            animation: pulse 0.6s ease-in-out;
            box-shadow: 0 0 30px rgba(237, 188, 129, 0.8);
            transform: scale(1.1);
          }
          
          .floating-button:active {
            transform: scale(0.95);
          }
          
          .fade-in-item {
            animation: fadeInUp 0.8s ease-out both;
          }
          
          .fade-in-item:nth-child(1) { animation-delay: 0.1s; }
          .fade-in-item:nth-child(2) { animation-delay: 0.2s; }
          .fade-in-item:nth-child(3) { animation-delay: 0.3s; }
          .fade-in-item:nth-child(4) { animation-delay: 0.4s; }
          
          .parallax-bg {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
      <div
        className="parallax-bg h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" ms-[64px] flex items-start justify-center h-screen gap-[99px] flex-col ">
          
          {/* Card-01 */}
          <div className="card-1 pt-[61px] pb-[40px] px-[56px] backdrop-blur-xs border border-white/20 shadow-2xl bg-black/30 rounded-3xl">
            <div className="flex flex-col gap-10">
              <h2 className="text-[64px] leading-[72px] w-[612px] font-serif ">What's next in your space travel</h2>
              <p className="text-[20px] w-[586px] text-gray-200 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
              <button className="floating-button bg-[#EDBC81] py-[24px] px-[48px] w-[182px] rounded-[36px] text-[24px] leading-[18px] hover:scale-110 transition decoration-2 ">Explore</button>
            </div>
          </div>

          {/* Card-02 */}
          <div className="card-2 backdrop-blur-xs border border-white/20 shadow-2xl bg-black/30 rounded-3xl px-[56px] py-[24px] flex flex-row gap-[92px] ">
            <div className="fade-in-item flex flex-col gap-2">
              <img src={icon} alt="" className="h-[24px] w-[24px] " />
              <h3 className="text-[24px]">Planets</h3>
              <p className="w-[231px] font-extralight  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="fade-in-item flex flex-col gap-2">
              <img src={icon} alt="" className="h-[24px] w-[24px] " />
              <h3 className="text-[24px]">Interstellar</h3>
              <p className="w-[231px] font-extralight  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="fade-in-item flex flex-col gap-2">
              <img src={icon} alt="" className="h-[24px] w-[24px] " />
              <h3 className="text-[24px]">Wormhole</h3>
              <p className="w-[231px] font-extralight  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="fade-in-item flex flex-col gap-2">
              <img src={icon} alt="" className="h-[24px] w-[24px] " />
              <h3 className="text-[24px]">Time</h3>
              <p className="w-[231px] font-extralight  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
