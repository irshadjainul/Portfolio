// import React, { useEffect } from "react";
// import heroImg from "../assets/images/Photograph.png";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Hero = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 200,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//   }, []);

//   return (
//     <div className="bg-black text-white text-center py-16">
//       <img
//         src={heroImg}
//         alt=""
//         data-aos="zoom-in"
//         className=" mt-8 mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
//         transition-transform duration-300 hover:scale-105"

//       />
//       <h1 data-aos="zoom-in" className="text-4xl font-bold">
//         I'm{" "}
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//           Irshad Ansari
//         </span>
//         , Full-Stack Developer
//       </h1>
//       <p data-aos="zoom-in" className="mt-4 text-lg text-gray-300">
//         I specialize in building modern and responsive web applications.
//       </p>
//       <div data-aos="zoom-in" className="mt-8 space-x-4">
//         <button
//           className="bg-gradient-to-r from-green-400 to-blue-500 text-white
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
//         >
//           Contact With Me
//         </button>
//         <button
//           className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
//         >
//           Resume
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect } from "react";
import heroImg from "../assets/images/Photograph.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    console.log("Initializing AOS...");
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div id="home" className="bg-black text-white text-center py-16">
      <img
        src={heroImg}
        alt="Profile"
        data-aos="zoom-in"
        className="mt-8 mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="200"
        className="text-4xl font-bold"
      >
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Irshad Ansari
        </span>
        , Front-End Developer
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="200"
        className="mt-4 text-lg text-gray-300"
      >
        I specialize in building modern and responsive web applications.
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="mt-8 space-x-4"
      >
        {/* <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </button>
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button> */}
        <a
          href="https://wa.me/+916202394002"
          target="_blank"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </a>
        <a
          href='https://drive.google.com/file/d/1BQt25ovOtew0n4kFo1KxYfOuFHkgWr9a/view?usp=drivesdk'
          target="_blank"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </a>
      </div>
    </div>
    </div>
  );
};

export default Hero;
