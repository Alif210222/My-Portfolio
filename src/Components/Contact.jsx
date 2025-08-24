import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram, FaMapMarkerAlt,FaGithub } from 'react-icons/fa';
import Contact_Form from './Contact-Form';

const Contact = () => {
  return (
    <div id='contact' className="max-w-6xl mt-12 mx-auto px-6 py-8 md:py-12">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#f40450] mb-2">Contact Me</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Feel free to reach out to me for collaborations or just a friendly hello!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Contact Info */}
        <motion.div
         initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          {/* Email */}
          <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
            <FaEnvelope className="text-[#f40450] text-2xl" />
            <p  className="text-gray-700">alifsarkerrony@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
            <FaPhoneAlt className="text-[#f40450] text-2xl" />
            <p className="text-gray-700">+8801580620803</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <p className="text-gray-700">+8801994677977</p>
          </div>

      
          
          {/* Location */}
          <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <p className="text-gray-700">Uttara, Dhaka, Bangladesh</p>
          </div>

              {/* Social Links */}
         <div className='flex items-center gap-4'>
          <p className='text-xl font-medium'>Find Me in: </p>
           <div className="bg-[#f0ecec] rounded-xl w-60 shadow-md p-5 flex items-center justify-center gap-8">
            <a href="https://www.linkedin.com/in/alif-sarker-rony-aa50802a7/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-blue-600 text-2xl hover:scale-110 transition" />
            </a>
            <a href="https://x.com/AlifSarkerRony1" target="_blank" rel="noreferrer">
              <FaTwitter className="text-sky-500 text-2xl hover:scale-110 transition" />
            </a>
             <a href="https://github.com/Alif210222" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-3xl text-gray-800 hover:text-black transition " title="GitHub" />
              </a>
          </div>
         </div>



        </motion.div>



        {/* Right Side - Contact Form */}
        <motion.div
         initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 p-6 rounded-xl shadow-md"
        >
            {/* form component  */}
             <Contact_Form></Contact_Form>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
