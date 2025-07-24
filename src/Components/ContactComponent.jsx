import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ContactCard = () => {
  return (
    <div className="   bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl shadow-lg p-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-  items-center">
        
        {/* Email */}
        <div>
          <p className="text-md text-gray-600 font-bold">Email:  
          <a href='' className="text-md font-mono text-gray-800 break-all hover:text-[#f36b86] hover:underline"> alifsarker@gmail.com</a></p>
        </div>

        {/* Phone */}
        {/* <div>
          <p className="text-sm text-gray-600 font-semibold">Phone</p>
          <p className="text-md text-gray-800">+880 1234-567890</p>
        </div> */}

        {/* Social Icons */}
        <div className="flex justify-center gap-5 ">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-gray-800 hover:text-black transition " title="GitHub" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-800 transition" title="LinkedIn" />
          </a>
          <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-3xl text-green-600 hover:text-green-700 transition" title="WhatsApp" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default ContactCard;
