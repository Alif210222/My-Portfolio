import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
              <p className='font-bold'>Copyright © {new Date().getFullYear()} - All right reserved by Alif<span className='text-[#f40450]'> Web</span> </p>
            </aside>
          </footer>
        </div>
    );
};

export default Footer;