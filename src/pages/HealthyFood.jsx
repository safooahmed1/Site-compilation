import picFood from "../assets/pro5/food.png";
import pic1OfRow from "../assets/pro5/Rectangle 18.png";
import pic2OfRow from "../assets/pro5/Rectangle 19.png";
import pic3OfRow from "../assets/pro5/Rectangle 20.png";
import dash from "../assets/pro5/dash.png";
import icon1 from "../assets/pro5/Ellipse 3.png"
import icon2 from "../assets/pro5/Ellipse 4.png"
import icon3 from "../assets/pro5/Ellipse 5.png"
import icon4 from "../assets/pro5/Ellipse 6.png"

export default function HealthyFood() {
  return (
    <>
      <style>
        {`
          @keyframes slideInLeft {
            from { transform: translateX(-40px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            from { transform: translateX(40px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes fadeInUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          /* New enhanced motion */
          @keyframes floatY {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
            50% { box-shadow: 0 14px 36px rgba(0,0,0,0.18); }
          }
          @keyframes shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          .enter-left { animation: slideInLeft 0.8s cubic-bezier(.2,.8,.2,1) both; will-change: transform, opacity; }
          .enter-right { animation: slideInRight 0.8s cubic-bezier(.2,.8,.2,1) both; will-change: transform, opacity; }
          .enter-up { animation: fadeInUp 0.8s cubic-bezier(.2,.8,.2,1) both; will-change: transform, opacity; }

          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }

          .stagger > * { opacity: 0; animation: fadeInUp 0.6s ease-out both; }
          .stagger > *:nth-child(1) { animation-delay: 0.1s; }
          .stagger > *:nth-child(2) { animation-delay: 0.2s; }
          .stagger > *:nth-child(3) { animation-delay: 0.3s; }

          .hf-button {
            position: relative;
            background: linear-gradient(90deg, #252525, #3a3a3a, #252525);
            background-size: 200% 200%;
            transition: transform 0.25s ease, box-shadow 0.25s ease, background-position 0.6s ease;
            will-change: transform, box-shadow, background-position;
          }
          .hf-button:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 12px 30px rgba(0,0,0,0.18); animation: shimmer 1.8s linear infinite; }
          .hf-button:active { transform: translateY(0) scale(0.98); }

          .hero-float { animation: floatY 5s ease-in-out infinite; filter: drop-shadow(0 12px 24px rgba(0,0,0,0.15)); transform-origin: center; transition: transform 0.3s ease; }
          .tilt-on-hover:hover { transform: perspective(800px) rotateX(3deg) rotateY(-3deg) scale(1.02); }

          .card-thumb { transition: transform 0.25s ease, box-shadow 0.25s ease; border-radius: 16px; }
          .card-thumb:hover { transform: translateY(-6px) rotateZ(-0.5deg) scale(1.02); box-shadow: 0 12px 26px rgba(0,0,0,0.15); }

          .icon-dot { transition: transform 0.2s ease, filter 0.2s ease; }
          .icon-dot:hover { transform: translateY(-3px) scale(1.06); filter: drop-shadow(0 6px 12px rgba(0,0,0,0.15)); }

          .dash-glow { animation: pulseGlow 2.8s ease-in-out infinite; border-radius: 9999px; }
        `}
      </style>
      <section className="h-screen w-full bg-[#fff] flex flex-col overflow-hidden  ">
        {/* top conteiner */}
        <div className="bg-[#F2F2F2] flex flex-row justify-around items-center gap-[72px]   ">
          <div className="text-[#252525] flex flex-col gap-[20px] enter-left ">
            <h1 className="w-[422px] leading-[94px] text-[72px] font-bold ">
              A place you eat healthy
            </h1>
            <p className="text-[24px] w-[483px] font-light  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget. Lorem ipsum dolor.
            </p>
            <button className="hf-button bg-[#252525] text-white text-[24px] leading-[18px] px-[48px] py-[24px] rounded-[36px] font-light w-[288px]">
              Explore menu
            </button>
          </div>
          <img src={picFood} alt="" className="enter-right hero-float tilt-on-hover" />
        </div>

        {/* bottom container */}
        <div className=" fixed bottom-[20px] w-full flex flex-row justify-around items-end gap-[72px]   enter-up delay-200">
          <div className="stagger hero-float flex gap-[24px]">
            <img src={pic1OfRow} alt="" className="" />
            <img src={pic2OfRow} alt="" className="" />
            <img src={pic3OfRow} alt="" className="" />
          </div>
          <div className="felx flex-col gap-[16px] enter-up delay-300">
            <div className="flex flex-col gap-[16px] ">
              <div className="flex flex-col gap-[16px]">
                <img src={dash} alt="" className="w-[52px] h-[6px] dash-glow " />
                <h3 className="text-[#252525] text-[22px] font-bold ">Chef ABC</h3>
              </div>
              <p className="text-[#252525]/80 text-[22px] w-[483px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper
              </p>
            </div>
            <div className="flex gap-[21px] ">
              <img src={icon1} alt="" className="icon-dot" />
              <img src={icon2} alt="" className="icon-dot" />
              <img src={icon3} alt="" className="icon-dot" />
              <img src={icon4} alt="" className="icon-dot" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
