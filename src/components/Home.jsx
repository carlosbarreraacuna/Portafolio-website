/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import Twitter from "../assets/socials/twitter.svg";
import Youtube from "../assets/socials/youtube.svg";
import GitHub from "../assets/socials/github.svg";
import Books from "../assets/socials/book.svg";
import { TypeAnimation } from "react-type-animation";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {
  let Links = [
    { name: "Proyectos", link: "projects" },
  ];
  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
      {/* hero info */}
      <div className="h-screen flex items-center justify-center">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center md:w-1/2">
          <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
            CARLOS BARRERA
          </h1>
          <TypeAnimation
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Desarrollador de software.",
              1000,
              "Frontend Developer.",
              1000,
              "Backend Developer.",
              1000,
              "Ingeniero de sistemas.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          {/* hero info */}
          <p className="text-light text-xl my-8">
            Desarrollador front end con experiencia en PHP, Laravel, CodeIgniter3, Tailwind CSS y Bootstrap. Creo interfaces web innovadoras y funcionales con HTML, CSS y JavaScript.
          </p>
          <a href="" className="btn py-4 px-16">PROYECTOS</a>


        </motion.div>
      </div>
      {/* hero socials */}
      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="my-1">
          <a
            href="https://www.linkedin.com/in/carlosbarrera2/"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={LinkedIn} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Twitter} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Youtube} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="https://github.com/carlosbarreraacuna/"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={GitHub} alt="" className="w-10 h-10" />
          </a>
        </div>
       
      </div>


    </div>
  );
};

export default Home;
