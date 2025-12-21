import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import Galaxy from "./Galaxy";
import Laptop from '../assets/laptop.png'
import Robot from "./Robot";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
          infinite: false,
          syncTouch: true,
        }}
      >
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <LaptopZoom />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const LaptopZoom = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, SECTION_HEIGHT], [1, 3]);

  const laptopOpacity = useTransform(scrollY, [SECTION_HEIGHT - 600, SECTION_HEIGHT], [1, 0]);

  const backgroundBlur = useTransform(scrollY, [0, SECTION_HEIGHT - 400], [15, 0]);
  const backgroundFilter = useMotionTemplate`blur(${backgroundBlur}px)`;

  return (
    <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Galaxy Background - BLURRED at start */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ filter: backgroundFilter }}
      >
        <Galaxy 
          transparent={false}
          density={1.2}
          glowIntensity={0.6}
          mouseInteraction={true}
          hueShift={180}
          saturation={0.3}
          twinkleIntensity={0.5}
          speed={0.5}
        />
      </motion.div>

      {/* Laptop Image Container - ALWAYS CLEAR */}
      <motion.div 
        className="relative z-10 flex items-center justify-center"
        style={{ scale }}
      >
        <motion.div 
          className="relative"
          style={{ opacity: laptopOpacity }}
        >
          <img 
            src={Laptop} 
            alt="Laptop" 
            className="w-[900px] h-auto object-contain"
          />
          
          {/* Galaxy inside laptop screen */}
          <div className="absolute top-[16.5%] left-[31%] w-[43%] h-[40%] overflow-hidden rounded-lg">
            <Galaxy 
              transparent={false}
              density={1.5}
              glowIntensity={0.8}
              mouseInteraction={true}
              hueShift={200}
              saturation={0.4}
              twinkleIntensity={0.6}
              speed={0.3}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-12 text-white"
    >
      
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="flex items-center justify-center mb-20 text-7xl font-black uppercase text-zinc-50 "
      >
        <Robot />
      </motion.h1>


    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};