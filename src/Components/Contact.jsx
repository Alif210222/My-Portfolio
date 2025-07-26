import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-6xl mt-14 mx-auto px-6 py-16">
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
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          {/* Email */}
          <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
            <FaEnvelope className="text-[#f40450] text-2xl" />
            <a href='' className="text-gray-700">alifsarkerrony@gmail.com</a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
            <FaPhoneAlt className="text-[#f40450] text-2xl" />
            <p className="text-gray-700">+8801XXXXXXXXX</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <p className="text-gray-700">+8801XXXXXXXXX</p>
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
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-blue-600 text-2xl hover:scale-110 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-sky-500 text-2xl hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition" />
            </a>
          </div>
         </div>



        </motion.div>



        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 p-6 rounded-xl shadow-md"
        >
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-3 focus:ring-pink-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-3 focus:ring-pink-400"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-3 focus:ring-pink-400"
            ></textarea>

            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <button
              type="submit"
              className="bg-[#f40450] text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
            >
              Submit Form
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
