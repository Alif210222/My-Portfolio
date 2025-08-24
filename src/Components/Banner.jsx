import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss,SiJavascript  } from 'react-icons/si';
import ContactCard from './ContactComponent';

const Banner = () => {
  return (
    <div id='banner' className="w-full mt-20 px-10 md:px-20 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-16 ">
      

      {/* LEFT: Description */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* <p class=" font-mono text-2xl mb-4 ">
 
          <> Hello World  </> 
           
        </p> */}


        <h1 className="text-2xl md:text-2xl lg:text-5xl font-extrabold  mb-3  leading-tight">
          Hi, I’m Alif Sarker <span className="text-[#f40450] text-[17px]  mt-3 lg:text-3xl  font-mono ">
            <Typewriter
              options={{
                strings: ['MERN stack Developer', ' React Expert', ' Node.js Enthusiast', ' MongoDB Builder'],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </span>
        </h1>

        <p className="  text-sm  lg:text-xl  text-gray-400 mb-4 mt-7 px-4 md:px-0" >
          I build fast, scalable and fully modern  responsive web applications using <span className='  lg:text-xl font-medium text-[#f7145c]'>MongoDB</span> ,<span className='lg:text-xl font-medium text-[#f7145c]'> Express.js</span> ,<span className='lg:text-xl font-medium text-[#f7145c]'> React.js</span> and  <span className='lg:text-xl font-medium text-[#f7145c]'>Node.js</span>.
          Passionate about UI/UX, APIs, and full-stack development.
        </p>

        <motion.a
        href='/resumepro.pdf'
        download="Alif's_Resume"     
        target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block cursor-pointer bg-gradient-to-br from-[#e00d56] via-[#c75478] to-[#da5093] text-white px-3 lg:px-6 py-3 font-medium rounded-xl mt-3 mb-8   hover:bg-[#e37f9f] transition"
        >
          Download Resume
        </motion.a>


        {/* <a
      href='../../public/My Resume.pdf'
      download="Alif's_Resume.pdf"     
      target="_blank" rel="noopener noreferrer"
      className="btn bg-[#ff0251] hover:bg-[#e37f9f] transition  font-medium">
      Download Resume
      </a> */}


        {/* // contact component  */}


        <ContactCard></ContactCard>
          


         {/* Rainbow Colored Tech Stack Icons */}
  {/* <div className="flex justify-center md:justify-start items-center gap-4 mt-6 ">
     <SiJavascript className="text-yellow-400 text-3xl hover:scale-110 transition " title="JavaScript" />
    <SiReact className="text-blue-500 text-3xl hover:scale-110 transition " title="React" />
    <SiNodedotjs className="text-green-600 text-3xl hover:scale-110 transition " title="Node.js" />
    <SiExpress className="text-gray-700 text-3xl hover:scale-110 transition " title="Express.js" />
    <SiMongodb className="text-green-500 text-3xl hover:scale-110 transition " title="MongoDB" />
    <SiTailwindcss className="text-sky-400 text-3xl hover:scale-110 transition " title="Tailwind CSS" />
  </div> */}
      </motion.div>


      {/* RIGHT: Image with background card */}
      <motion.div
        className="md:w-1/2 relative flex justify-center items-center md:ml-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Background Card */}
        <motion.div
          className="hidden lg:flex   w-72 h-96 bg-gradient-to-br from-[#0e0e0e] to-[#505052]  rounded-3xl shadow-xl shadow-[#e13169] absolute top-8 left-8 z-0 "
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        ></motion.div>

        {/* Image Card */}
        <motion.div
          className="w-72 h-96 rounded-3xl overflow-hidden shadow-2xl z-10  "
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            // src="https://i.ibb.co/JwDdM1sT/user-2.jpg"
            // src="https://i.ibb.co/d4KqbRwM/my-profile.jpg"
            src="https://i.ibb.co.com/3yYcrbBp/profile-final.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
