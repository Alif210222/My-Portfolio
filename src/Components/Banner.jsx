import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss,SiJavascript  } from 'react-icons/si';
import ContactCard from './ContactComponent';

const Banner = () => {
  return (
    <div className="w-full mt-20 px-10 md:px-16 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-20 md:gap-34">
      

      {/* LEFT: Description */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p class=" font-mono text-2xl mb-4 ">
 
          <> Hello World  </> 
           
        </p>


        <h1 className="text-4xl md:text-5xl font-extrabold  mb-4 leading-tight">
          Hi, I’m Alif Sarker <span className="text-[#f40450] text-3xl font-mono ">
            <Typewriter
              options={{
                strings: ['a MERN Stack Developer', 'a React Expert', 'a Node.js Enthusiast', 'a MongoDB Builder'],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-4 mt-10 px-4 md:px-0" >
          I build fast, scalable and fully modern <span className='text-xl font-medium '> responsive</span> web applications using <span className='text-xl font-medium text-[#f7145c]'>MongoDB</span> ,<span className='text-xl font-medium text-[#f7145c]'> Express</span> ,<span className='text-xl font-medium text-[#f7145c]'> React</span> and  <span className='text-xl font-medium text-[#f7145c]'>Node.js</span>.
          Passionate about UI/UX, APIs, and full-stack development.
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-br from-[#e00d56] via-[#c75478] to-[#d37ea7] text-white px-6 py-3 font-medium rounded-xl mb-8   hover:bg-[#e37f9f] transition"
        >
          View Projects
        </motion.a>


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
        className="md:w-1/2 relative flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Background Card */}
        <motion.div
          className="w-72 h-96 bg-gradient-to-br from-[#0e0e0e] to-[#505052]  rounded-3xl shadow-xl shadow-[#e13169] absolute top-8 left-8 z-0 "
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
            src="https://i.ibb.co/JwDdM1sT/user-2.jpg"
            // src="https://i.ibb.co/d4KqbRwM/my-profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
