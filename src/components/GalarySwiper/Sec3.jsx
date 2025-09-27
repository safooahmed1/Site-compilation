import BounceCards from "./BounceCards";
import ScrollVelocity from "./ScrollVelocity.jsx";

export default function Sec3() {
  const images = [
    "https://i.pinimg.com/1200x/b5/0e/6a/b50e6a5c614456c50ddfa0ddac54ebf6.jpg",
    "https://i.pinimg.com/1200x/69/3b/d5/693bd5fd26a43db60330c6e237c7c120.jpg",
    "https://i.pinimg.com/1200x/63/22/02/632202f30b5593732e880b15a7d09560.jpg",
    "https://i.pinimg.com/736x/37/86/28/378628cdc3b80f473c0a3422b6b42c80.jpg",
    "https://i.pinimg.com/1200x/33/78/3b/33783b721fdb1ed2160ea8b2e05a882f.jpg",
    "https://i.pinimg.com/1200x/5d/64/20/5d6420b3a7cc3433d42e5def5e928337.jpg",
    "https://i.pinimg.com/1200x/b3/d7/b8/b3d7b8633bcdbf962c339f661c3fd0e6.jpg",
    "https://i.pinimg.com/736x/23/50/58/2350585959702e7d4b309e6ce9bb8c0d.jpg",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  return (
    <>
      <div className="flex flex-col items-center  bg-black/30 p-8 rounded-2xl my-5 backdrop-brightness-95 shadow-lg">
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={600}
          containerHeight={400}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div>
      <ScrollVelocity
        texts={["MARWAN pablo", "marwan PABLO", "MARWAN pablo"]}
        // velocity={velocity}
        className="custom-scroll-text"
      />
    </>
  );
}
