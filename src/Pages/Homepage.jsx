import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import About from '../Components/About';
import TechnicalExpertise from '../Components/TecnicalExpertComponent';
import AcademicJourney from '../Components/AcademicJourney';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

const Homepage = () => {
    return (
        <div className='bg-[#21252a] min-h-screen '>
            <Navbar></Navbar>
            <div className='max-w-8xl mx-auto'>
               <Banner></Banner>
               <About></About>
               <TechnicalExpertise></TechnicalExpertise>
               <AcademicJourney></AcademicJourney>
               <Contact></Contact>
               <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Homepage;