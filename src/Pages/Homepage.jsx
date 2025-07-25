import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import About from '../Components/About';

const Homepage = () => {
    return (
        <div className='bg-[#21252a] min-h-screen '>
            <Navbar></Navbar>
            <div className='max-w-8xl mx-auto'>
               <Banner></Banner>
               <About></About>
            </div>
            
        </div>
    );
};

export default Homepage;