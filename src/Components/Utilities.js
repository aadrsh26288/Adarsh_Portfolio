import React from "react";
import { System } from "../Data/UtilitiesData";
import{CodingTools} from "../Data/UtilitiesData"
// import {popUpFromBottomForText} from '../Content/Farmer'
import AnimatedDiv from "../Content/AnimatedDiv";
import { popUpFromBottomForText, FadeContainer,popUp} from '../Content/Farmer'
// import AnimatedDiv from '../Content/AnimatedDiv';
import { motion } from "framer-motion";

const Utilities = () => {
  return (
    <div className="pt-20 max-w-[88%] mx-auto">
      <AnimatedDiv variants={popUpFromBottomForText}>
      <h1 className="text-5xl inter font-bold">Utilities</h1>
      <p className="text-[1.4rem] mt-3 text-[#a3a3a3] inter">
        In case you are wondering what tech I use,Here's the list of what tech
        I'm currently using for coding on the daily basis.
      </p>
      </AnimatedDiv>
    
      {/*System  */}
      <div className="mt-5">
        <h1 className="text-3xl inter font-bold">System</h1>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-5">
          {System.map((s) => {
            return (
              <motion.div variants={popUp}>
              <div className="flex text-4xl flex-col items-center justify-center p-8  cursor-pointer hover:shadow-lg hover:border-[1px] hover:scale-125 transition-all rounded-lg text-[#c3c3c3] hover:text-white  bg-[#25282A] ">
                <s.icon />
                <p className="text-[11px] font-medium ">{s.title}</p>
              </div>
              </motion.div>
       
            );
          })}
        </div>
        </motion.div>

        {/* coding Tools */}
        <div className="mt-10 pb-10">
          <h1 className="text-3xl inter font-bold">Coding Tools</h1>
            <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-5">
          {CodingTools.map((s) => {
            return (
              <motion.div variants={popUp}>
               <div className="flex text-4xl flex-col items-center justify-center p-8 cursor-pointer hover:shadow-lg hover:border-[1px] hover:scale-125 transition-all rounded-lg text-[#c3c3c3] hover:text-white  bg-[#25282A] ">
                <s.icon />
                <p className="text-[11px] font-medium ">{s.title}</p>
              </div>
              </motion.div>
        
            );
          })}
        </div>
        </motion.div>
  
        
        </div>
      </div>
    </div>
  );
};

export default Utilities;