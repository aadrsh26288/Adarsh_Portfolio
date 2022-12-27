import React,{useState,useEffect} from "react";
import { SiGithub } from "react-icons/si";
import { MdLink } from "react-icons/md";
import { ProjectData } from "../Data/ProjectsData";

const Projects = () => {
// console.log("Project", ProjectData.Skills[0])

  return (
    <div className="pt-20  max-w-5xl mx-auto ">
      <h1 className="text-5xl inter font-bold ">Projects</h1>
      <p className="text-xl text-[#a3a3a3] mt-5 font-medium inter">
        Some stuff that i have worked on
      </p>
      <div className="grid grid-cols-1 gap-10 py-5 lg:px-20 md:px-10 px-5">
        {ProjectData.map((project) => {
          // console.log("Project", project.Skills)
      

          return (
            <div className={`bg-[#25282A]  rounded-lg  grid md:grid-cols-2 lg:p-[45px] p-[30px] gap-4 bg-[#2] px-10 ` }>
              <div>
                <img
                  src={project.Img}
                  className=" w-full md:w-[485px] h-[200px] object-cover rounded-md grayscale"
                />
              </div>
              <div className="flex flex-col justify-start gap-3 md:px-3 ">
                <h1 className="text-[18px] inter font-[700] text-[#c3c3c3]">
                  {project.Title}
                </h1>
                <p className="text-[16px] font-[400] inter text-[#a3a3a3]">
                  {project.Description}
                </p>
                <div className="flex gap-2 items-center flex-wrap ">
                   {
                     project.Skills.map((skill)=>{
                      return (
                           <span className=" bg-neutral-900 text-gray-400 rounded px-2 py-1 text-[12px]">
                    {skill}
                  </span>
                      )
                     })
                   }
                </div>

                <div className="flex gap-3 mt-1 text-2xl items-center flex-wrap text-gray-500 ">
                  <a href={project.Github} target="_blank">
                    <SiGithub className='' />
                  </a>
                  <a href={project.Link}>
                    <MdLink className=''/>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;