// import pablo from "../../assets/pro8/pablo.png";
import pabloWBg from "../../assets/pro8/withBg.jpg";
import ScrollSwiper from "./ScrollSwiper";
import TiltedCard from './TiltedCard';

export default function Sec1() {
  return (
    <>
      <div className="flex  bg-black/30 p-8 rounded-2xl my-5 backdrop-brightness-95 shadow-lg">
        {/* pic */}
        <div className="">
          {/* <img src={pablo} alt="" /> */}
          <TiltedCard
            imageSrc={pabloWBg}
            // altText="Kendrick Lamar - GNX Album Cover"
            captionText="Marwan Pablo"
            containerHeight="920px"
            containerWidth="736px"
            imageHeight="920px"
            imageWidth="736px"
            rotateAmplitude={12}
            scaleOnHover={1.}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">الاب الروحي في التراب</p>
            }
          />
        </div>
        {/* contant */}
        <div className="">
          <ScrollSwiper />
        </div>
      </div>
    </>
  );
}
