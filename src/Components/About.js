import React from 'react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiMysql,
  SiFirebase,
  SiReact,
  SiGithub,
  SiRedux
} from "react-icons/si";
import {popUpFromBottomForText} from '../Content/Farmer'
import AnimatedDiv from "../Content/AnimatedDiv";

const About = () => {
  return (
    <div className=" pt-20 max-w-[80%] mx-auto">
      <AnimatedDiv variants={popUpFromBottomForText}>
        <h1 className="text-5xl inter font-bold">About Me</h1>
        
        <div className="mt-10 text-[14px] text-[#878686] inter flex flex-col gap-6 text-justify pb-5">
            <p>Hey, I am Adarsh Mishra. A Front-end Developer/React Developer from India who loves to design and code. I use React.js to build the web application interfaces and the functionalities. At the moment, I have completed my Bachelor's degree in Computer Science.</p>
            <p>I have 5 months of experience in web development and 3 months of experience in React JS as an intern, where I worked on live industrial projects as well as some personal projects. Aside from coding, I enjoy watching football and movies.</p>
            <p>If you were to ask me what stack I would prefer, I would say</p>
            <div className="-mt-3">
            <span className="flex items-center gap-2"> Framework : <SiReact className="text-xl text-blue-400" /> React</span>  
            <span className="flex items-center gap-2"> Database : <SiFirebase className="text-xl text-yellow-500" /> Firebase</span>  
            <span className="flex items-center gap-2"> Styling : <SiTailwindcss className="text-xl text-sky-300" /> TailwindCss</span>  
            </div>
           <p>You can do anything you can think of with these three things. React.js is an open-source web development library built on top of Javascript. React allows you to easily create reusable components, which we can use throughout our application. Firebase is an open source database that provides authentication, storage, etc.<br></br><br></br> Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching
           </p>
            
        </div>
      </AnimatedDiv>


    </div>
  )
}

export default About