"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Sami Info Tech",
    description:
      "A comprehensive course-selling platform built with Next.js and Tailwind CSS. Features include course management, user authentication, payment integration, and an intuitive admin dashboard.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://samiinfotech.com/",
    github: "",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Authentication", "Payment Integration"],
    featured: true,
  },
  {
    id: 2,
    title: "Xe-One",
    description:
      "A sophisticated forex trading platform with real-time data visualization, trading analytics, and secure transaction processing. Built with modern web technologies for optimal performance.",
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://xeone.com/",
    github: "",
    technologies: ["Next.js", "React", "TypeScript", "Real-time Data", "Trading APIs"],
    featured: true,
  },
  {
    id: 3,
    title: "Recipe Genius",
    description:
      "A full-stack web app that allows users to create, save, and edit recipes with authentication. Built using the MERN stack with a modern UI.",
    image: "https://images.pexels.com/photos/5907901/pexels-photo-5907901.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://recipe-genius-jagn.vercel.app/",
    github: "https://github.com/aadrsh26288/RecipeGenius",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Authentication"],
    featured: false,
  },
  {
    id: 4,
    title: "The Pen's Point",
    description:
      "A blog website with features for creating blogs, commenting, and liking posts. Includes user authentication and real-time updates using Firebase.",
    image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://blog-app-lilac-one.vercel.app/",
    github: "",
    technologies: ["React", "Firebase", "Tailwind CSS", "Authentication"],
    featured: false,
  },
  {
    id: 5,
    title: "ShopeO E-commerce",
    description:
      "E-commerce website with advanced product filtering, cart functionality, and state management using Redux Toolkit.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
    link: "https://shop-o-e-commerce.vercel.app/",
    github: "https://github.com/aadrsh26288/ShopO-e-commerce",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS"],
    featured: false,
  },
  {
    id: 6,
    title: "Chat App",
    description:
      "Real-time chat application with instant communication between authenticated users using Firebase.",
    image: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://chat-app-gamma-three.vercel.app/",
    github: "https://github.com/aadrsh26288/ChatApp",
    technologies: ["React", "Firebase", "Tailwind CSS", "Real-time"],
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-barlow mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground mt-4 text-lg">
              Some of my recent work and personal projects
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Featured Projects */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <motion.div key={project.id} variants={fadeInUp}>
                    <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary/90 backdrop-blur-sm">
                            Featured
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="gap-3">
                        <Button variant="default" size="sm" asChild>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit Site
                          </a>
                        </Button>
                        {project.github && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Source
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
            </div>

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <motion.div key={project.id} variants={fadeInUp}>
                    <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <CardHeader className="flex-grow">
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="gap-2">
                        <Button variant="default" size="sm" asChild className="flex-1">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit
                          </a>
                        </Button>
                        {project.github && (
                          <Button variant="outline" size="sm" asChild className="flex-1">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
