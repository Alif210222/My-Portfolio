import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaFolderOpen, FaSmile, FaCode } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss,SiJavascript  } from 'react-icons/si';


const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 mt-8 flex flex-col md:flex-row gap-18 items-start">

      {/* Left Side - Skill List */}
      <motion.ul
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-2/5 space-y-8 mt-17 text-lg font-medium text-gray-800"
      >
        <li className="bg-pink-100 p-3 rounded-lg shadow-sm">💻 Website Development</li>
        <li className="bg-pink-100 p-3 rounded-lg shadow-sm">📱 App Development</li>
        <li className="bg-pink-100 p-3 rounded-lg shadow-sm">🛠️ Debugging</li>
        <li className="bg-pink-100 p-3 rounded-lg shadow-sm">💻 Problem Solving</li>
                <li className="bg-pink-100 p-3 rounded-lg shadow-sm">☁️ Website Hosting</li>


    {/* Rainbow Colored Tech Stack Icons */}
  <div className="flex justify-center md:justify-start items-center gap-12  mt-14 ">
     <SiJavascript className="text-yellow-400 text-3xl hover:scale-110 transition " title="JavaScript" />
    <SiReact className="text-blue-500 text-3xl hover:scale-110 transition " title="React" />
    <SiNodedotjs className="text-green-600 text-3xl hover:scale-110 transition " title="Node.js" />
    <SiExpress className="text-gray-700 text-3xl hover:scale-110 transition " title="Express.js" />
    <SiMongodb className="text-green-500 text-3xl hover:scale-110 transition " title="MongoDB" />
    <SiTailwindcss className="text-sky-400 text-3xl hover:scale-110 transition " title="Tailwind CSS" />
  </div>


      </motion.ul>

      {/* Right Side - About Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-3/5"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#f40450]">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          I'm <span className="font-semibold text-[#e70d52]">Alif Sarker</span>, a dedicated software developer with a passion for creating elegant and efficient digital experiences. My journey began with basic web design and grew into full-scale app development using the MERN stack. I love turning complex problems into simple, beautiful solutions and continuously learning new technologies to stay ahead in the field.
        </p>

        {/* Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <FaFolderOpen className="text-3xl text-pink-500 mb-2 mx-auto" />
            <h3 className="text-2xl text-gray-900 font-bold">50+</h3>
            <p className="text-gray-600">Total Projects</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <FaCheckCircle className="text-3xl text-green-500 mb-2 mx-auto" />
            <h3 className="text-2xl text-gray-900 font-bold">40+</h3>
            <p className="text-gray-600">Completed Projects</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <FaClock className="text-3xl text-yellow-500 mb-2 mx-auto" />
            <h3 className="text-2xl text-gray-900 font-bold">5+</h3>
            <p className="text-gray-600">Pending Projects</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <FaSmile className="text-3xl text-blue-400 mb-2 mx-auto" />
            <h3 className="text-2xl text-gray-900 font-bold">25+</h3>
            <p className="text-gray-600">Client Reviews</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <FaCode className="text-3xl text-purple-500 mb-2 mx-auto" />
            <h3 className="text-2xl text-gray-900 font-bold">3+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
