import pic1 from "../assets/pro3/1.png";
import pic2 from "../assets/pro3/2.png";
import pic3 from "../assets/pro3/3.png";
import pic4 from "../assets/pro3/4.png";
import pic5 from "../assets/pro3/5.png";
import pic6 from "../assets/pro3/6.png";
import pic7 from "../assets/pro3/7.png";
import pic8 from "../assets/pro3/8.png";
import pic9 from "../assets/pro3/9.png";
import pic10 from "../assets/pro3/10.png";
import pic11 from "../assets/pro3/11.png";
import pic12 from "../assets/pro3/12.png";
import pic13 from "../assets/pro3/13.png";
import pic14 from "../assets/pro3/14.png";
import pic15 from "../assets/pro3/15.png";
import pic16 from "../assets/pro3/16.png";
import { useEffect, useRef } from "react";

export default function TheCreativeGateway() {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = gridRef.current?.querySelectorAll('.gallery-image');
    images?.forEach((img, index) => {
      img.style.animationDelay = `${index * 0.1}s`;
      observer.observe(img);
    });

    // Add animation to left section elements
    const leftSection = document.querySelector('.left-section');
    if (leftSection) {
      const elements = leftSection.querySelectorAll('.animate-on-scroll');
      elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        observer.observe(element);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
        
        .buttonE {
          transition: all 0.3s ease;
        }

        .buttonE:hover {
          box-shadow: 0 0 30px rgba(999, 999, 999, 0.8);
          transform: scale(1.1);
        }
            
        .buttonE:active {
          animation: pulse 0.6s ease-in-out;
          transform: scale(0.95);
        }

        .gallery-image {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
        }

        .gallery-image:hover {
          transform: scale(1.15) rotate(2deg);
          z-index: 10;
        }

        .gallery-image:nth-child(even):hover {
          transform: scale(1.15) rotate(-2deg);
        }


        .gallery-image img {
          transition: all 0.4s ease;
        }

        .gallery-image:hover img {
          transform: scale(1.1);
        }

        /* Left Section Animations */
        .left-section h1 span {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
        }

        .left-section h1 span:hover {
          transform: scale(1.1) translateX(10px);
          text-shadow: 0 0 20px currentColor;
        }

        .left-section p {
          transition: all 0.4s ease;
          cursor: default;
        }

        .left-section p:hover {
          transform: translateX(10px);
          color: #e0e0e0;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
        }

        .animate-on-scroll.animate__animated {
          opacity: 1;
          transform: translateY(0);
        }

        /* Enhanced left section animations */
        .left-section {
          animation: slideInLeft 1s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Staggered animation for text spans */
        .left-section h1 span:nth-child(1) {
          animation-delay: 0.2s;
        }

        .left-section h1 span:nth-child(2) {
          animation-delay: 0.4s;
        }

        .left-section h1 span:nth-child(3) {
          animation-delay: 0.6s;
        }

        .left-section p {
          animation-delay: 0.8s;
        }

        .left-section button {
          animation-delay: 1s;
        }
      `}
      </style>
      <section className="bg-[#2F2F2F] flex flex-row h-screen w-full items-center justify-around gap-[53px] ">
        {/* Left Section */}
        <div className="order-1 ms-5 left-section">
          <div className="flex flex-col gap-[24px] items-start ">
            <h1 className="flex flex-col w-[370px] text-[72px] font-bold ">
              <span className="text-[#FEC3C7] animate-on-scroll">Design.</span>
              <span className="text-[#9AD7F3] animate-on-scroll">Create.</span>
              <span className="text-[#6BDFDA] animate-on-scroll">Inspire.</span>
            </h1>
            <p className="w-[450px] text-[24px] animate-on-scroll">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget.
            </p>
            <button className="buttonE bg-white text-[#232323] rounded-[36px] px-[48px] py-[24px] leading-[18px] text-[24px] animate-on-scroll">
              Explore
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-2">
          <div ref={gridRef} className="grid grid-cols-4 gap-[18px]">
            <div className="gallery-image relative">
              <img src={pic1} alt="Gallery Image 1" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic2} alt="Gallery Image 2" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic3} alt="Gallery Image 3" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic4} alt="Gallery Image 4" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic5} alt="Gallery Image 5" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic6} alt="Gallery Image 6" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic7} alt="Gallery Image 7" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic8} alt="Gallery Image 8" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic9} alt="Gallery Image 9" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic10} alt="Gallery Image 10" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic11} alt="Gallery Image 11" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic12} alt="Gallery Image 12" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic13} alt="Gallery Image 13" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic14} alt="Gallery Image 14" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic15} alt="Gallery Image 15" className="w-full h-auto" />
            </div>
            <div className="gallery-image relative">
              <img src={pic16} alt="Gallery Image 16" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
