import bg from "../assets/pro9/bg.png";
import { motion } from "framer-motion";

export const Japan = () => {
  let parentStyle = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "right top",
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // كل عنصر يدخل بعد التاني بـ 0.2 ثانية
        delayChildren: 0.3, // تأخير قبل ما نبدأ كله
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  //card
  const containerCard = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // كل كارد تطلع بعد التانية بـ 0.15 ثانية
      },
    },
  };

  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 60, // تبدأ تحت بـ 60px
    },
    show: {
      opacity: 1,
      y: 0, // تطلع لمكانها الطبيعي
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1], // easing curve ناعم
      },
    },
  };

  const cards = [
    {
      number: "01",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
    },
    {
      number: "02",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
    },
    {
      number: "03",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
    },
  ];

  return (
    <>
      <div
        style={parentStyle}
        className="overflow-hidden h-screen w-full bg-no-repeat bg-[#050912] justify-center flex flex-col px-[100px] gap-[104px]"
      >
        {/* Content */}
        <motion.div
          className="Content flex flex-col w-full max-w-[684px] gap-[24px]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-[88px] font-black"
            variants={item}
            whileHover={{
              textShadow:
                "0px 0px 20px rgba(255,255,255,0.8), 0px 0px 40px rgba(139,92,246,0.6)",
              transition: { duration: 0.3 },
            }}
          >
            DESIGN THE FUTURE
          </motion.h1>

          <motion.p
            className="leading-[32px] text-[clamp(18px,3vw,24px)] text-gray-200"
            variants={item}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
            nec gravida ipsum pulvinar vel non dui.
          </motion.p>

          <motion.button
            className="px-[48px] py-[24px] bg-white text-[#100E19] w-fit rounded-[16px] leading-[18px] text-[24px] font-semibold hover:bg-gray-100 transition-colors"
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(255,255,255,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get started
          </motion.button>
        </motion.div>

        {/* card list */}
        <motion.div
          className="flex gap-[24px]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="py-[44px] px-[54px] rounded-2xl w-[412px] h-[232px] bg-white/10 backdrop-blur-sm text-white"
              variants={cardVariant}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="w-[305px] gap-[16px] flex flex-col">
                <h2 className="font-black text-[32px] leading-[32px]">
                  {card.number}
                </h2>
                <p className="font-light text-[20px] leading-[32px]">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
