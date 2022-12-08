import React,{useState,useEffect} from "react";
import Skills from "./Skills";
import Contact from "./Contact";
import { AiOutlineDownload } from "react-icons/ai";
import {
  popUpFromBottomForText,
  FadeContainer,
  popUp,
} from "../Content/Farmer";
import AnimatedDiv from "../Content/AnimatedDiv";
import { motion } from "framer-motion";
import Profile from "../Images/Profile.png";
import Profile2 from "../Images/Profile2.png";

import { TypeAnimation } from "react-type-animation";

const Home = () => {
  // console.log(window.body)
  // document.body.style.backgroundColor ='#F2F5FA';

  return (
    <>
      <div className=" pt-10   md:grid grid-cols-2 flex flex-col-reverse max-w-[90%] mx-auto content-center  ">
        <div className="pt-20 woff  p-5 ">
          <AnimatedDiv variants={popUpFromBottomForText}>
            <h1 className="text-lg ">HI THERE 👋, I'M</h1>
          </AnimatedDiv>

          <AnimatedDiv variants={popUp}>
            <div className="Ani mt-3   md:h-auto first-letter:text-gray-400 ">
              <TypeAnimation
                sequence={[
                  "Adarsh Mishra",
                  1000,
                  "Web Developer",
                  1000,
                  "Web Designer",
                  1000,
                  "React Developer",
                  1000,
                ]}
                speed={25} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: "3.5rem" }}
                wrapper="h2" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </div>
          </AnimatedDiv>

          <div className="text-2xl inter md:mt-5">
            <p>
              Currently Working as Web Dev intern (React js) At{" "}
              <span className="font-bold">Mitambi Solutions.</span>
            </p>
            {/* <p className="mt-5">I have 5 months of experience in Web development and 3 months of experience in react</p> */}
          </div>

          <button className="flex items-center gap-1 text-lg border-[1px] p-2 justify-center px-6  mt-10 rounded-md hover:bg-[#25282A] text-white animate-bounce">
            <AiOutlineDownload
              size={20}
              className=" duration-300 transition-all"
            />
            Resume
          </button>
        </div>

        <div className="  lg:pr-10 flex justify-center items-center">
          <img
            src={Profile}
            className=" grayscale md:inline hidden  "
          />
        </div>
      </div>
      <Skills />
      <Contact />
    </>
  );
};

export default Home;