"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Dmacq Solutions",
    duration: "Sep 2025 – Present",
    description:
      "Leading frontend development initiatives, implementing microfrontends architecture, and building scalable React applications using modern tools and best practices.",
    technologies: ["Next.js", "React", "TypeScript", "TanStack Query", "Monorepos"],
  },
  {
    role: "Software Developer",
    company: "V2Stech Solutions",
    duration: "Oct 2024 – Jun 2025",
    description:
      "Developed and maintained multiple web applications, implemented state management solutions, and collaborated with cross-functional teams to deliver high-quality products.",
    technologies: ["React", "TypeScript", "Redux", "Vitest", "Docker"],
  },
  {
    role: "React JS Developer",
    company: "Sublime Technocorp",
    duration: "Feb 2024 – Jun 2024",
    description:
      "Built responsive user interfaces, optimized application performance, and integrated RESTful APIs for various client projects.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
  },
  {
    role: "Intern",
    company: "SIL",
    duration: "2023 (3 months)",
    description:
      "Gained hands-on experience in web development, learned best practices, and contributed to team projects.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    role: "Intern",
    company: "Mitambi Solutions",
    duration: "2022 (3 months)",
    description:
      "Introduced to professional software development, participated in code reviews, and developed foundational programming skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-barlow mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground mt-4 text-lg">
              My professional journey in software development
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative ${
                    index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>

                  <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold font-barlow">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-primary font-semibold">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exp.duration}
                          </p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
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
