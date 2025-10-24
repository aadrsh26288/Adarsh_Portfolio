"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-muted-foreground text-lg font-medium">
                HI THERE 👋, I&apos;M
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="h-24">
              <h1 className="text-5xl md:text-7xl font-bold font-barlow">
                <Typewriter
                  options={{
                    strings: [
                      "Adarsh Mishra",
                      "Frontend Developer",
                      "React Developer",
                      "Next.js Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-2xl md:text-3xl font-medium text-muted-foreground font-inter">
                Front-End Developer with{" "}
                <span className="text-foreground font-bold">2 years</span> of
                professional experience
              </p>
              <p className="text-lg text-muted-foreground font-inter">
                Specialized in building high-performance web applications using{" "}
                <span className="font-semibold text-foreground">Next.js</span>,{" "}
                <span className="font-semibold text-foreground">React</span>, and{" "}
                <span className="font-semibold text-foreground">TypeScript</span>.
                Passionate about creating scalable architectures and modern UI
                systems.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group"
                onClick={() => window.open("#", "_blank")}
              >
                <AiOutlineDownload className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/aadrsh26288"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://linkedin.com/in/adarsh-mishra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative hidden md:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="relative rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/images/Profile.png"
                  alt="Adarsh Mishra"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
