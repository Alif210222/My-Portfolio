import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiGithub,
  SiFirebase,
  SiFigma,
  SiTypescript,
  SiNextdotjs
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const skills = [
  { icon: <SiHtml5 className="text-orange-500 text-4xl mb-3 mx-auto" />, name: 'HTML5', percent: 100 },
  { icon: <SiCss3 className="text-blue-500 text-4xl mb-3 mx-auto" />, name: 'CSS3', percent: 90 },
  { icon: <SiTailwindcss className="text-sky-400 text-4xl mb-3 mx-auto" />, name: 'Tailwind CSS', percent: 90 },
  { icon: <SiJavascript className="text-yellow-400 text-4xl mb-3 mx-auto" />, name: 'JavaScript', percent: 90 },
  { icon: <SiReact className="text-blue-400 text-4xl mb-3 mx-auto" />, name: 'React', percent: 90 },
  { icon: <SiReactrouter className="text-red-500 text-4xl mb-3 mx-auto" />, name: 'React Router', percent: 85 },
  { icon: <SiNodedotjs className="text-green-600 text-4xl mb-3 mx-auto" />, name: 'Node.js', percent: 85 },
  { icon: <SiExpress className="text-gray-700 text-4xl mb-3 mx-auto" />, name: 'Express.js', percent: 70 },
  { icon: <SiMongodb className="text-green-500 text-4xl mb-3 mx-auto" />, name: 'MongoDB', percent: 80 },
  { icon: <SiGithub className="text-black text-4xl mb-3 mx-auto" />, name: 'Git & GitHub', percent: 85 },
  { icon: <SiFirebase className="text-yellow-500 text-4xl mb-3 mx-auto" />, name: 'Firebase', percent: 80 },
  { icon: <SiFigma className="text-pink-500 text-4xl mb-3 mx-auto" />, name: 'Figma', percent: 70 },
  { icon: <SiTypescript className="text-blue-600 text-4xl mb-3 mx-auto" />, name: 'TypeScript (Learning)', percent: 50 },
  { icon: <SiNextdotjs className="text-gray-800 text-4xl mb-3 mx-auto" />, name: 'Next.js (Learning)', percent: 45 },
];

const TechnicalExpertise = () => {
  return (
    <div id="skill" className="max-w-7xl mx-auto px-6 py-10 md:py-12 mt-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#e1074c] mb-2">Technical Expertise & skillset</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A quick glance at my technical stack and current learning areas.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-r from-[#9a9999] to-[#d7d6d6] rounded-xl shadow-lg p-6 border-2 border-gray-400 text-center hover:border-2 hover:border-[#f92a72]   hover:shadow-[#f92a72]"
            >
              {skill.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h3>
              {/* <div className="w-full bg-white rounded-full h-2">
                <div
                  className="bg-[#3b3738] h-2 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div> */}
              {/* <p className=" text-gray-800 mt-2">{skill.percent}%</p> */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalExpertise;
