import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
      duration: 2,
    }).to(".vi-mask-group", {
      scale: 10,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      duration: 2,
      opacity: 0,
      delay: -1.8,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.9,
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.9,
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1,
      x: "25%",
      bottom: "-20%",
      rotate: 0,
      duration: 2,
      delay: -0.9,
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.9,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });

      gsap.to(".sky", {
        x: xMove,
      });

      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-12 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-white text-4xl -mt-[8px] leading-none">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv overflow-hidden relative w-full h-screen">
              <img
                className="sky scale-[1.2] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />

              <img
                className="bg scale-[1.5] rotate-[-3deg] absolute top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />

              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12rem] -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none  ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
              </div>

              <img
                className="character absolute left-1/2 scale-[3] rotate-[-20deg] -bottom-[150%] -translate-x-1/2"
                src="./girlbg.png"
                alt=""
              />
            </div>

            <div className="btmbar text-white absolute bottom-0  w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i class="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>

              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen px-10 flex items-center justify-center  bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[40%] py-15">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display_Extrabold]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta reprehenderit a pariatur assumenda vel error placeat
                  sequi beatae asperiores, quibusdam sapiente quam doloremque.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display_Extrabold]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam deserunt corporis neque officiis! Soluta reprehenderit
                  a pariatur assumenda vel error placeat sequi beatae
                  asperiores, quibusdam sapiente quam doloremque.
                </p>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display_Extrabold]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam deserunt corporis neque officiis! Soluta reprehenderit
                  a pariatur assumenda vel error placeat sequi beatae
                  asperiores, quibusdam sapiente quam doloremque.
                </p>
                <button className="bg-yellow-500 mt-10 text-black px-6 py-5 text-4xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
