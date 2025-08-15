import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaFolderOpen, FaSmile, FaCode } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss,SiJavascript  } from 'react-icons/si';


const About = () => {
  return (
    <div id='about' className="max-w-7xl mx-auto px-6  md:py-16 mt-8 flex flex-col-reverse  md:flex-row md:gap-18 items-start">

      {/* Left Side - Skill List */}
      <motion.ul
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className=" w-full md:w-2/5 space-y-8 mt-20 text-lg font-medium text-gray-800"
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
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#f40450]  md:ml-0 ml-28">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          I'm <span className="font-semibold text-[#e70d52]">Alif Sarker</span>, a dedicated software developer with a passion for creating elegant and efficient digital experiences. My journey began with basic web design and grew into full-scale app development using the MERN stack. I love turning complex problems into simple, beautiful solutions and continuously learning new technologies to stay ahead in the field.
        </p>

        {/* Counter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:bg-[#f6cae2]  transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <FaFolderOpen className="text-3xl text-pink-500 mb-2 mx-auto hidden lg:flex" />
            <h3 className="text-2xl text-gray-900 font-bold">20+</h3>
            <p className="text-gray-600">Total Projects</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:bg-[#f6cae2]  transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <FaCheckCircle className="text-3xl text-green-500 mb-2 mx-auto hidden lg:flex" />
            <h3 className="text-2xl text-gray-900 font-bold">17+</h3>
            <p className="text-gray-600">Completed Projects</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:bg-[#f6cae2]  transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <FaClock className="text-3xl text-yellow-500 mb-2 mx-auto hidden lg:flex" />
            <h3 className="text-2xl text-gray-900 font-bold">3+</h3>
            <p className="text-gray-600">Pending Projects</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:bg-[#f6cae2]  transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <FaSmile className="text-3xl text-blue-400 mb-2 mx-auto hidden lg:flex" />
            <h3 className="text-2xl text-gray-900 font-bold">35+</h3>
            <p className="text-gray-600">Client Reviews</p>
          </div>
          <div className= " hidden  bg-white rounded-xl shadow-md p-6 text-center hover:bg-[#f6cae2]  transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <FaCode className="text-3xl text-purple-500 mb-2 mx-auto " />
            <h3 className="text-2xl text-gray-900 font-bold">1+</h3>
            <p className="text-gray-600 ">Years of Experience with development</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
