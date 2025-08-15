import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool, FaTrophy, FaUsers, FaCheckCircle, FaBookOpen } from 'react-icons/fa';

const AcademicJourney = () => {
  return (
    <div id='academic' className="max-w-4xl mx-auto px-6 py-8 md:py-12 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#f40450] mb-2">Academic Journey</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A brief overview of my educational background and achievements.
        </p>
      </motion.div>

      <div className="space-y-8">
        {/* University */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 border-l-4 border-pink-400 hover:border-gradient-to-r from-pink-400 to-yellow-400 transform hover:scale-105 transition-all duration-300"
        >
          <FaUniversity className="text-3xl text-[#f40450] mt-1" />
          <div>
            <h3 className="text-xl text-black font-semibold">B.Sc in Computer Science & Engineering</h3>
            <p className="text-gray-600">Currently studying in 3rd Year <span className='text-[#f40450] font-medium'> ( With full Scholarship )</span></p>
            <p className="text-gray-700 font-medium">Current CGPA: 3.79 out of 4</p>
          </div>
        </motion.div>

        {/* College */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 border-l-4 border-pink-400 hover:border-gradient-to-r from-pink-400 to-yellow-400 transform hover:scale-105 transition-all duration-300"
        >
          <FaSchool className="text-3xl text-[#f40450] mt-1" />
          <div>
            <h3 className="text-xl text-black font-semibold">Higher Secondary Certificate (HSC)</h3>
            <p className="text-gray-600">Rajuk Uttara Model College</p>
            
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-400 hover:border-gradient-to-r from-pink-400 to-yellow-400 transform hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <FaTrophy className="text-2xl text-yellow-500" />
            <p className="font-semibold text-gray-700">2nd Position in University Programming Competition</p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <FaUsers className="text-2xl text-blue-500" />
            <p className="font-semibold text-gray-700">Active Member of University Computer Club</p>
          </div>
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-2xl text-green-500" />
            <p className="font-semibold text-gray-700">Organized 4 Successful Programming Competitions in my University</p>
          </div>
        </motion.div>

        {/* Completed Courses */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-400 hover:border-gradient-to-r from-pink-400 to-yellow-400 transform hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#f40450]">
            <FaBookOpen /> Completed Courses
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>MERN Stack Web Development</li>
            <li>Digital Communication</li>
            <li>Basic Problem Solving in C</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicJourney;
