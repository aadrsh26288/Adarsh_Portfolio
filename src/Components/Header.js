import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon, FiMenu } from "react-icons/fi";
import { useAnimation, motion } from "framer-motion";
import { popUp, hamFastFadeContainer } from "../Content/Farmer";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [Scroll, setScroll] = useState("");
  const [Mode, setMode] = useState(true);
  const [modal, setModal] = useState(false);

  const ChangeScroll = () => {
    if (window.scrollY > 10) {
      setScroll("#25282A");
    } else {
      setScroll("");
    }
  };
  useEffect(() => {
    ChangeScroll();
    window.addEventListener("scroll", ChangeScroll);
  });

  console.log('a'+-'b'+23+3)
  return (
    <header
      className={`flex  justify-between  p-4 bg-[${Scroll}]  items-center fixed w-full    z-10`}
    >
      <div>
        <Link to="/">
          <h1 className="text-xl Sarina ">Adarsh</h1>
        </Link>
      </div>
      <div className="hidden md:flex woff gap-10  items-center ">
        <NavLink to="/" activeClassName="font-semibold ">
          <p className="text-[19px] hover:bg-neutral-700/50 px-3 py-[4px] transition-all rounded-md cursor-pointer ">
            Home
          </p>
        </NavLink>
        <NavLink exact to="/about" activeClassName="font-semibold underline">
          {" "}
          <p className="text-[19px] hover:bg-neutral-700/50 px-3 py-[3px] transition-all rounded-md ">
            About
          </p>
        </NavLink>
        <NavLink to="/utilities">
          {" "}
          <p className="text-[19px] hover:bg-neutral-700/50 px-3 py-[3px] transition-all rounded-md ">
            Utilities
          </p>
        </NavLink>
        <NavLink to="/projects">
          <p className="text-[19px] hover:bg-neutral-700/50 px-3 py-[3px] transition-all rounded-md ">
            Projects
          </p>
        </NavLink>
      </div>

      <div className=" hidden md:flex items-center gap-6 text-xl">
        <a
          href="https://www.linkedin.com/in/adarsh-mishra-2089b9223/"
          target="_blank"
        >
          <SiLinkedin />
        </a>
        <a href="https://github.com/aadrsh26288" target="_blank">
          <SiGithub />
        </a>
        <a href="">
          <SiGmail />
        </a>
      </div>

      <motion.div
        style={{ zIndex: 1000 }}
        initial="hidden"
        animate="visible"
        variants={popUp}
        className="sm:hidden"
      >
        {!modal ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer select-none transform duration-300 rounded-md active:scale-50"
            onClick={() => {
              setModal(true);
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer select-none transform duration-300  rounded-md active:scale-50"
            onClick={() => {
              setModal(!modal);
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </motion.div>

      {modal == true ? (
        <div className="sm:hidden woff transition-all delay-300 text-white absolute  right-0 top-0 w-full h-screen bg-[#181A1B] ">
          <motion.div
            variants={hamFastFadeContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="pt-10 font-bold text-gray-100 flex text-[17px]  flex-col md:hidden  gap-8  pl-4  "
          >
            <motion.a
              variants={popUp}
              className="border-b-[1px] p-1 mr-3 border-gray-700"
            >
         <Link to="/"><span>Home</span></Link>     
            </motion.a>

            <motion.a
              variants={popUp}
              className="border-b-[1px] p-1 mr-3 border-gray-700"
            >
          <Link to='/about'> <span>About</span></Link>   
            </motion.a>

            <motion.a
              variants={popUp}
              className="border-b-[1px] p-1  mr-3 border-gray-700"
            >
          <Link to='/utilities'> <span>Utilities</span></Link>   
            </motion.a>

            <motion.a
              variants={popUp}
              className="border-b-[1px] p-1 mr-3 border-gray-700"
            >
           <Link to='/projects'><span>Projects</span></Link>   
            </motion.a>
          </motion.div>

          <motion.div
            variants={hamFastFadeContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="  flex pl-5 p-6 gap-6 text-xl"
          >
            <motion.a
              variants={popUp}
              href="https://www.linkedin.com/in/adarsh-mishra-2089b9223/"
              target="_blank"
            >
              <SiLinkedin />
            </motion.a>
            <motion.a
              variants={popUp}
              href="https://github.com/aadrsh26288"
              target="_blank"
            >
              <SiGithub />
            </motion.a>
            <motion.a variants={popUp} href="">
              <SiGmail />
            </motion.a>
          </motion.div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
