import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern personal portfolio to showcase skills and projects.",
    image: "https://i.ibb.co/tT6NpzHd/aitool.webp",
    technologies: ["React", "Tailwind CSS", "Framer Motion","Tailwind CSS","Tailwind CSS","Tailwind CSS"],
    frontend: "https://github.com/yourname/portfolio-frontend",
    backend: "https://github.com/yourname/portfolio-backend",
    live: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A full-stack e-commerce application with product, cart, and payment features.",
    image: "https://i.ibb.co/JW53fzZz/ums.jpg",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    frontend: "https://github.com/yourname/ecom-frontend",
    backend: "https://github.com/yourname/ecom-backend",
    live: "https://ecomexample.com",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A blogging platform with markdown support, authentication and dashboard.",
    image: "https://i.ibb.co/nN15Rtw2/security.jpg",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    frontend: "https://github.com/yourname/blog-frontend",
    backend: "https://github.com/yourname/blog-backend",
    live: "https://blogexample.com",
  },
];

const MyProjects = () => {
  return (
    <section className="w-full max-w-7xl mx-auto  py-20 px-6 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#e1074c] mb-22 mt-10">
        🚀 My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-[#06071e]/100  rounded-xl shadow-xl p-4 flex flex-col border-2 border-gray-600 justify-between hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Project Image */}
            <a href=''>
        
           
            <img

              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-8 border border-[#525a89] cursor-pointer"
            />
             </a>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-6 text-sm">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-br from-[#e00d56] via-[#c22f5d] to-[#713954] text-white text-xs font-medium px-2.5 py-2 rounded-xl"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-auto flex justify-between items-center gap-2">
              <a
                href={project.frontend}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-[#4c2437] bg-white/10 text-[#e00d56]   font-medium px-2 py-2 rounded-md text-xs hover:bg-[#f2adeb] transition w-full text-center"
              >
                Frontend Code
              </a>
              <a
                href={project.backend}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-[#4c2437] bg-white/10 text-[#e00d56]   font-medium px-3 py-2 rounded-md text-xs hover:bg-[#f2adeb] transition w-full text-center"
              >
                Backend Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-[#4c2437] bg-white/20 text-[#e00d56]   font-medium px-3 py-2 rounded-md text-sm hover:bg-[#f2adeb] transition w-full text-center"
              >
                Live Site
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
