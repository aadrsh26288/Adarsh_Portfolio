"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-barlow mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    I&apos;m a <span className="text-foreground font-semibold">Front-End Developer</span> with{" "}
                    <span className="text-foreground font-semibold">2 years of professional experience</span>{" "}
                    building high-performance web applications using Next.js and React.
                  </p>
                  <p>
                    I specialize in creating{" "}
                    <span className="text-foreground font-semibold">scalable architectures</span> and{" "}
                    <span className="text-foreground font-semibold">modern UI systems</span>. My expertise includes:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">Microfrontends & Monorepos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">TypeScript & Modern JavaScript</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">TanStack Query & State Management</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">Vitest & Testing Best Practices</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">Docker & DevOps</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">Design Patterns & Architecture</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    I&apos;m passionate about writing clean, maintainable code and building products that provide
                    exceptional user experiences. I continuously learn and adapt to new technologies to stay at
                    the forefront of web development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
