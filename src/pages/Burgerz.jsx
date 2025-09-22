import pic1 from "../assets/pro4/Ellipse 10.png";
import pic2 from "../assets/pro4/Ellipse 11.png";
import pic3 from "../assets/pro4/Ellipse 12.png";
import pic4 from "../assets/pro4/Ellipse 13.png";
import pic5 from "../assets/pro4/Ellipse 14.png";
import pic6 from "../assets/pro4/Ellipse 15.png";
import pic7 from "../assets/pro4/Ellipse 16.png";
import bg from "../assets/pro4/unsplash_T8SD7bwyxHU.png";

export default function Burgerz() {
  let pics = [
    { Name: pic1 },
    { Name: pic2 },
    { Name: pic3 },
    { Name: pic4 },
    { Name: pic5 },
    { Name: pic6 },
    { Name: pic7 },
  ];
  const Image = () => {
    return pics.map((el, index) => {
      return (
        <img
          key={index}
          className="mx-[-32px] animate-fade-in-up"
          src={el.Name}
          alt=""
          style={{ animationDelay: `${index * 0.2}s` }}
        />
      );
    });
  };
  return (
    <>
      <section className="bg-[#070b14] ">
        <div className="flex justify-around items-center h-screen w-full overflow-hidden ">
          {/* contant */}
          <div className="w-[539px] flex flex-col gap-[50px] z-10 ms-[100px] mb-10 ">
            <h1 className="font-extrabold text-white text-[64px] animate-fade-in-up">
              Wake up your taste buds with this{" "}
              <span className="text-[#CD292A] ">juicy bites</span>{" "}
            </h1>
            <div className="flex gap-[32px] mx-[32px] ">{Image()} </div>
            <p
              className="text-[24px] leading-[24px] animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus.
            </p>
            <button
              className="bg-[#CD292A] px-[40px] py-[24px] leading-[18px] text-[22px] rounded-[40px] w-[280px] hover:scale-105 transition-all duration-300 hover:bg-[#B02425] animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              Explore the menu
            </button>
          </div>

           {/* list */}
           <div className="w-full fixed bottom-15 z-20  ">
             <div className="flex flex-row gpa-[16px] items-center justify-around ">
               <span 
                 className="backdrop-blur-xs p-[36px] leading-[18px] text-[24px] font-semibold rounded-[40px] bg-white/17 text-center animate-fade-in-up hover:scale-105 hover:bg-white/25 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 cursor-pointer" 
                 style={{ animationDelay: "0.8s" }}
               >
                 From farm to table
               </span>
               <span 
                 className="backdrop-blur-xs p-[36px] leading-[18px] text-[24px] font-semibold rounded-[40px] bg-white/17 text-center animate-fade-in-up hover:scale-105 hover:bg-white/25 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 cursor-pointer" 
                 style={{ animationDelay: "1.0s" }}
               >
                 Fresh ingredients
               </span>
               <span 
                 className="backdrop-blur-xs p-[36px] leading-[18px] text-[24px] font-semibold rounded-[40px] bg-white/17 text-center animate-fade-in-up hover:scale-105 hover:bg-white/25 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 cursor-pointer" 
                 style={{ animationDelay: "1.2s" }}
               >
                 Quality guaranteed
               </span>
             </div>
           </div>

          {/* backGrond */}
          <img
            src={bg}
            alt=""
            className="order-2 scale-110 animate-bounce-slow"
          />
        </div>
      </section>
    </>
  );
}
