import bg from "../assets/pro7/nintendo.png";

export default function Nintando() {
  let url = "https://www.friv.com/";
  return (
    <div className="relative h-screen w-full flex justify-center items-center bg-gradient-to-r from-[#ff2d55] to-[#007aff] overflow-hidden">
      {/* صورة النينتندو كخلفية */}
      <img
        src={bg}
        alt="Nintendo Switch 2"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  pointer-events-none select-none z-10"
        draggable="false"
        aria-hidden="true"
      />
      {/* شاشة الجهاز (iframe) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[1080px] h-[600px]  ">
        <iframe
          src={url}
          className="w-full h-full"
          title="Nintendo Screen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
