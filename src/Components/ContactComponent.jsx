import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ContactCard = () => {
  return (
    <div className=" md:w-80 lg:w-auto  bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl shadow-lg p-6 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2   items-center">
        
        {/* Email */}
        <div >
          <p className="text-md md:text-sm  lg:text-[16px] text-gray-600 font-bold ">Email:  
          <span  className="text-[15px] lg:text-[16px] font-mono text-gray-800 break-all hover:text-[#f36b86] hover:underline"> alifsarkerrony@gmail.com</span></p>
        </div>

        {/* Phone */}
        {/* <div>
          <p className="text-sm text-gray-600 font-semibold">Phone</p>
          <p className="text-md text-gray-800">+880 1234-567890</p>
        </div> */}

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-4  ml-4">
          <a href="https://github.com/Alif210222" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-gray-800 hover:text-black transition " title="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/alif-sarker-rony-aa50802a7/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-800 transition" title="LinkedIn" />
          </a>
          <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-3xl text-green-600 hover:text-green-700 transition" title="WhatsApp : 01994677977" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default ContactCard;
