import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';

const Homepage = () => {
    return (
        <div className='bg-[#21252a] min-h-screen '>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
               <Banner></Banner>
            </div>
            
        </div>
    );
};

export default Homepage;