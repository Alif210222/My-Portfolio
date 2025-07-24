import React from 'react';

const Navbar = () => {

const links = <>

        <li  className='  text-white    lg:mr-3 border-0 rounded text-[15px] font-medium hover:bg-[#b66780]'><a href="" >Home </a></li> 
        <li  className='  text-white    lg:mr-3 border-0 rounded text-[15px] font-medium hover:bg-[#b66780]'><a href="">About </a></li> 
        <li  className='  text-white    lg:mr-3 border-0 rounded text-[15px] font-medium hover:bg-[#b66780]'><a href="">Skills </a></li> 
        <li  className='  text-white    lg:mr-3 border-0 rounded text-[15px] font-medium hover:bg-[#b66780]'><a href="">Project </a></li> 
        <li  className='  text-white    lg:mr-3 border-0 rounded text-[15px] font-medium hover:bg-[#b66780]'><a href="">Education </a></li> 
        <li  className='  text-white    lg:mr-3 border-0 rounded text-[15px] font-medium hover:bg-[#b66780]'><a href="">Contact </a></li> 


</>
         



    return (
        <div className="navbar bg-[#21252a]   border-b-2 border-[#943452]  p-2  px-2 md:px-16">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
        links
       }
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold">Alif<span className='text-[#ff0251]'>Pro</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
      links
     }
    </ul>
  </div>
  <div className="navbar-end ">
    <button className="btn bg-[#ff0251] hover:bg-[#e37f9f] transition ">Download Resume</button>
  </div>
</div>
    );
};

export default Navbar;