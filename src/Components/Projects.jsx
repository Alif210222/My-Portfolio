import React, { useState } from "react";
import { motion } from 'framer-motion';


const projects = [
  {
    id: 1,
    title: "App Orbit",
    description: "This platform serves as a community-driven hub where users can showcase, discover, and engage with tech-based products. Whether you're a developer, entrepreneur, or tech enthusiast, you can upload your product, explore others’ innovations, upvote your favorites, and contribute valuable feedback through reviews. The platform encourages visibility, collaboration, and recognition for creators — while promoting the latest in tech innovation and development.",
    features:" User Authentication & Role-Based Access – Secure Firebase authentication with support for user roles (admin, moderator, user). Tech Product Submission –Users can submit their own products with title, image, tags, description, external link, and more.Review & Feedback – Logged-in users can leave reviews with rating Product pages display community feedback in a user-friendly slider.Dynamic Search & Pagination –Browse products easily by searching tags or keywords with paginated results.Stripe Payment Integration :Users can purchase a membership to unlock premium features ( unlimited product submissions)",
    future: `AI-Powered Product Recommendations – Suggest relevant products to users based on browsing and voting history.
Gamification & Badges – Reward users with badges for contributions (reviews, uploads, upvotes).
Advanced Analytics Dashboard – Give creators insight into product engagement, reviews, and visitor data.
Real-Time Chat & Collaboration Rooms – Let developers and users discuss products instantly.
Mobile App Version – Build a dedicated mobile app for better accessibility and push notifications.
Multilingual Support – Expand to global audiences by adding multiple languages.`,
    image: "https://i.ibb.co.com/Ndqdh3qz/Screenshot-2025-08-08-115511.png",
    technologies: ["React","Node.js","Express.js","MongoDB","Firebase","JWT", "Tailwind CSS","Framer Motion"],
    frontend: "https://github.com/Alif210222/App-Orbit-client",
    backend: "https://github.com/yourname/portfolio-backend",
    live: "https://app-orbit.netlify.app/",
  },
  {
    id: 2,
    title: "Volunteer Management ",
    description: "Our volunteer website aims to connect individuals with meaningful community service opportunities, making it easier for people to contribute their time and skills where they’re needed most. We support nonprofit organizations by helping them find reliable and passionate volunteers. By encouraging civic engagement and social responsibility, we hope to inspire collective action. The platform simplifies discovering, joining, and managing volunteer work, fostering a culture of compassion.",
    features:"User Registration & Authentication – Allows volunteers and organizers to sign up, log in, and manage their profiles securely. Post & Browse Opportunities – Organizers can post volunteer needs, and users can browse opportunities by category, location, or date.Volunteer Application & Management – Users can apply to volunteer, and organizers can accept, reject, or manage applicants.Real-Time Availability Tracking – Shows how many volunteer slots are available and updates in real time. ",
    future: `Volunteer Hour Tracking & Certificates – Automatically track hours and generate verified volunteer certificates.
AI Matching System – Suggest opportunities to volunteers based on skills, interests, and location.
Donation & Fundraising Integration – Allow organizations to raise funds directly through the platform.
Event Calendar & Reminders – Notify volunteers of upcoming events and deadlines.
Mobile App with Offline Mode – Volunteers can log hours even without an internet connection.
Impact Reporting Dashboard – Show how volunteer work has impacted the community in measurable ways.`,
    image: "https://i.ibb.co.com/6cL3DzmK/Screenshot-2025-08-08-120641.png",
    technologies: ["React","Node.js","Express.js","MongoDB","Firebase","JWT", "Tailwind CSS"],
    frontend: "https://github.com/Alif210222/Volunteers-Management-Web-client",
    backend: "https://github.com/yourname/ecom-backend",
    live: "https://volunteer-management-web.netlify.app/",
  },
  {
    id: 3,
    title: "Job Seeker BD",
    description: "To help people  find their job without any  suffering.And also candidate can see multiple companies job post in one site, this things is very helpful.",
    features:"Candidate can see multiple companies job post in one site.Also they can see specific company details and also know about their job post detailed.If any candidate want to apply , then they can apply those company from this websites page.User can see their profile and update profile .only the register user can see their profile page and company or job details .Users can see which number of people are using this website and which number of people get help or job by this site.Its a ser friendly site that help the user guide how to do apply",
    future: `AI Resume Builder & Job Matching – Help candidates build ATS-friendly resumes and match them with relevant jobs.
Interview Preparation Hub – Provide mock interview tools, coding challenges, and industry-specific quizzes.
Employer Dashboard with Analytics – Let companies track job post performance and applicant stats.
Freelance & Remote Job Integration – Include opportunities beyond traditional full-time jobs.
Skill Verification & Digital Badges – Allow users to earn badges for verified skills to improve hiring chances.
Mobile App & Push Notifications – Notify candidates of new job posts instantly.`,
    image: "https://i.ibb.co.com/4h3ybd1/Screenshot-2025-08-12-131444.png",
    technologies: ["React", "Tailwind CSS","Framer Motion","Node.js","React router","Firebase"],
    frontend: "https://github.com/Alif210222/Job-Seeker-Web",
    backend: "https://github.com/yourname/blog-backend",
    live: "https://job-seeker-bd.netlify.app/",
  },
];

const MyProjects = () => {
   const [selectedProject, setSelectedProject] = useState(null);
  

  return (
    <section id='project' className="w-full max-w-7xl mx-auto py-10 md:py-12 px-6 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#e1074c] mb-12 mt-10">
        🚀 My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-[#06071e]/100  rounded-xl shadow-xl p-3 flex flex-col border-2 border-gray-600 justify-between hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Project Image */}
            <a href=''>
        
           
            <img

              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-8 border border-[#525a89] cursor-pointer"
            />
             </a>


             <div className='flex justify-between mb-4'>
                {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-300 mb-4 ">
                      {project.title}
                 </h3>

                 

                 {/* Open the modal using document.getElementById('ID').showModal() method */}
             <button
                className="btn border border-[#7e244e] hover:border-[#f92a72]"
                onClick={() => {
                  setSelectedProject(project);
                  document.getElementById('project_modal').showModal();
                }}
              >
                View Details
              </button>

                     

             </div>
          

        

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#cb2065]/20 text-[#d197ae] text-[12px] font-medium px-2.5 py-2 rounded-xl"
                  // className="bg-gradient-to-br from-[#e00d56] via-[#c22f5d] to-[#713954] text-white text-xs font-medium px-2.5 py-2 rounded-xl"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className=" flex justify-between items-center gap-16 mt-3 mb-3">
              <a
                href={project.frontend}
                target="_blank"
                rel="noreferrer"
                className="border-1 border-[#7e244e] bg-white/10 text-[#eee9eb]   font-medium px-2 py-3 rounded-md text-sm shadow-md hover:border-[#f92a72]   hover:shadow-[#f92a72]  transition w-full text-center"
              >
                Client site code
              </a>
              {/* <a
                href={project.backend}
                target="_blank"
                rel="noreferrer"
                className="border-1 border-[#742248] bg-white/10 text-[#f2edef]   font-medium px-3 py-3 rounded-md text-xs shadow-md hover:border-[#f92a72]   hover:shadow-[#f92a72] transition w-full text-center"
              >
                Backend Code
              </a> */}
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="border-1 border-[#ad2364] bg-white/10 text-[#c7255e]   font-medium px-3 py-2 rounded-md text-md shadow-md hover:border-[#f92a72]   hover:shadow-[#f92a72] transition w-full text-center"
              >
               Live project link
              </a>
            </div>
          </motion.div>
        ))}
      </div>

 {/* modal */}
 <dialog id="project_modal" className="modal modal-bottom sm:modal-middle">
        {selectedProject && (
          <div className="modal-box">
            <h3 className="font-bold text-lg text-[#e1074c]">
              {selectedProject.title}
            </h3>
            <p className=" mt-4 font-semibold text-pink-400">Purpose of this website : <span className="py-2 font-normal text-gray-400 "  >{selectedProject.description}  </span> </p>
            <h4 className="mt-4 font-semibold text-pink-400">Features:</h4>
            <ul className="list-disc list-inside text-gray-400">
              {selectedProject.features.split('.').map((feature, i) => (
                <li key={i}>{feature.trim()}</li>
              ))}
            </ul>
            {selectedProject.future && (
              <>
                <h4 className="mt-4 font-semibold text-pink-400">Future Plans:</h4>
                <p className="text-gray-400">{selectedProject.future}</p>
              </>
            )}

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        )}
      </dialog>
    </section>



    
  );
};

export default MyProjects;
