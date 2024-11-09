
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaVuejs, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb } from 'react-icons/si';

const projects = [
  {
    name: "Project One",
    image: "https://via.placeholder.com/300x200",
    liveLink: "https://project-one.com",
    techStack: [<FaReact key="react1" />, <SiTailwindcss key="tailwind1" />, <SiFirebase key="firebase1" />]
  },
  {
    name: "Project Two",
    image: "https://via.placeholder.com/300x200",
    liveLink: "https://project-two.com",
    techStack: [<FaNode key="node2" />, <FaReact key="react2" />, <SiMongodb key="mongodb2" />]
  },
  {
    name: "Project Three",
    image: "https://via.placeholder.com/300x200",
    liveLink: "https://project-three.com",
    techStack: [<FaVuejs key="vue3" />, <SiTailwindcss key="tailwind3" />, <SiFirebase key="firebase3" />]
  },
  {
    name: "Project Four",
    image: "https://via.placeholder.com/300x200",
    liveLink: "https://project-four.com",
    techStack: [<FaHtml5 key="html4" />, <SiTailwindcss key="tailwind4" />, <FaReact key="react4" />]
  }
];

export default function VerticalRecentProjects() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-16 lg:px-32">
      {/* Section Header */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-5xl font-bold mb-4 text-heading-gradient underline-gradient">
          Recent Projects
        </h2>
      </motion.div>

      {/* Vertically Stacked Project List */}
      <div className="max-w-4xl mx-auto space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center bg-secondaryCtaBg rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={`${project.name} preview`}
              className="w-full md:w-1/3 h-64 object-cover hover:scale-105 transition-transform duration-300"
            />

            {/* Project Details */}
            <div className="p-6 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-white mb-2 underline-gradient">
                {project.name}
              </h3>

              {/* Tech Stack Icons */}
              <div className="flex space-x-4 text-textAccent mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-2xl">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Link Button */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-cta-gradient text-white py-2 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
              >
                View Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
