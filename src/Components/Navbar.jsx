import React from 'react';

const Navbar = () => {

const links = <>

        <li  className='  text-white    lg:mr-3 border-0 rounded text-[15px] font-medium hover:bg-[#b66780]'><a href="#banner" >Home </a></li> 
        <li  className='  text-white    lg:mr-3 border-0 rounded text-[15px] font-medium hover:bg-[#b66780]'><a href="#about">About </a></li> 
        <li  className='  text-white    lg:mr-3 border-0 rounded text-[15px] font-medium hover:bg-[#b66780]'><a href="#skill">Skills </a></li> 
        <li  className='  text-white    lg:mr-3 border-0 rounded text-[15px] font-medium hover:bg-[#b66780]'><a href="#project">Project </a></li> 
        <li  className='  text-white    lg:mr-3 border-0 rounded text-[15px] font-medium hover:bg-[#b66780]'><a href="#academic">Education </a></li> 
        <li  className='  text-white    lg:mr-3 border-0 rounded text-[15px] font-medium hover:bg-[#b66780]'><a href="#contact">Contact </a></li> 

</>
         



    return (
        <div className="navbar bg-[#21252a]   border-b-2 border-[#943452]  p-2  px-2 md:px-4 lg:px-16 fixed top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
        links
       }
      </ul>
    </div>
    <a href='/' className="btn btn-ghost text-2xl md:text-3xl  font-bold">Alif<span className='text-[#ff0251]'>Web</span></a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 ">
     {
      links
     }
    </ul>
  </div>
  <div className="navbar-end ">
    <a
      href='/resumepro.pdf'
      download="Alif's_Resume"     
      target="_blank" rel="noopener noreferrer"
      className="btn bg-[#ff0251] hover:bg-[#e37f9f] transition  font-medium">
      Download Resume
      </a>
  </div>
</div>
    );
};

export default Navbar;