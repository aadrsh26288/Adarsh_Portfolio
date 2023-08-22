// import { FadeContainer, popUp } from "../../content/FramerMotionVariants";
// import { HomeHeading } from "../../pages";
import {
	popUpFromBottomForText,
	FadeContainer,
	popUp,
} from "../Content/Farmer";
import AnimatedDiv from "../Content/AnimatedDiv";
import { motion } from "framer-motion";
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
	SiMongodb,
	SiGithub,
	SiTypescript,
	SiRedux,
	SiNodedotjs,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

function SkillSection() {
	return (
		<section className='mx-auto max-w-[85%] mt-24'>
			{/* <HomeHeading title="My Top Skills" /> */}

			<h1 className='text-[35px] font-bold inter'>My Skills</h1>

			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={FadeContainer}
				viewport={{ once: true }}
				className='grid my-10 gap-4 grid-cols-4'>
				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none'>
						<SiHtml5 className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						HTML
					</p>
				</motion.div>

				<motion.div
					variants={popUp}
					className='p-4  select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none'>
						<SiCss3 className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						CSS
					</p>
				</motion.div>

				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none'>
						<SiJavascript className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						Javascript
					</p>
				</motion.div>

				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none'>
						<SiReact className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						React
					</p>
				</motion.div>

				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none'>
						<SiTailwindcss className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						Tailwind CSS
					</p>
				</motion.div>

				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none'>
						<SiFirebase className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						Firebase
					</p>
				</motion.div>

				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none'>
						<SiRedux className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						Redux
					</p>
				</motion.div>
				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 '>
						<SiNodedotjs className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						Node js
					</p>
				</motion.div>

				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 '>
						<SiNextdotjs className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						Next js
					</p>
				</motion.div>

				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 '>
						<SiTypescript className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						Typescript
					</p>
				</motion.div>

				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 '>
						<SiMongodb className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						Mongodb
					</p>
				</motion.div>

				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 '>
						<SiPython className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						Python
					</p>
				</motion.div>

				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none'>
						<SiGit className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						Git
					</p>
				</motion.div>

				<motion.div
					variants={popUp}
					className='p-4 select-none  flex items-center justify-center sm:justify-start gap-4  hover:bg-[#25282A] border rounded-sm border-neutral-700  transform origin-center md:origin-top group'>
					<div className='relative transition group-hover:scale-110 sm:group-hover:scale-100 '>
						<SiGithub className='w-8 h-8' />
					</div>
					<p className='hidden inter  sm:inline-flex text-sm md:text-base font-semibold  '>
						Github
					</p>
				</motion.div>
			</motion.div>
		</section>
	);
}

export default SkillSection;
