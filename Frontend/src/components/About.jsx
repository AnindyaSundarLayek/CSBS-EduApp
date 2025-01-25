import React from 'react'
import { Link } from "react-router-dom"
import banner from "/banner.png";

function About() {
  return (
    <>

<section className="bg-background text-foreground py-32 px-4">
  <div className="relative w-full h-[500px] mx-auto mb-8">
    <img
      alt="Painting of a person suffering from anxiety"
      src="https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164356.jpg?t=st=1724691487~exp=1724695087~hmac=1ba76c69a569264bd6789a84cd46a6c5aea1b22c0b82cf5263d1945063ea266f&w=996"
      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
    />
    <div className="relative flex flex-col justify-center items-center text-center h-full p-4 bg-opacity-40 bg-black">
      <h1 className="text-4xl font-bold text-white mb-4">
        Empowering Tomorrow's <span className="text-accent">CSBS Innovators</span>
      </h1>
      <p className="text-lg text-white">
        Tech Visionaries: &nbsp;Your All-In-One Platform for 
        <span className="text-accent"> Computer Science & Business Systems Digital Notes and Scholarly Achievement.</span>
      </p>
    </div>
  </div>

  <div className="flex justify-center items-center">
    <blockquote className="border-l-4 border-accent pl-4 text-muted-foreground justify-center items-center text-center">  Welcome to  <span className="text-accent">LEARNN</span>, your go-to platform for comprehensive and easily accessible digital notes tailored specifically for Computer Science & Business Systems (CSBS) undergraduates.
    </blockquote>
  </div>
</section>

<div className="flex flex-col md:flex-row items-center justify-center p-6 bg-background rounded-lg shadow-md mx-auto" style={{ maxWidth: '1200px' }}>
  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
    <img 
      alt="WhaleFin globe illustration" 
      src="https://cdn3d.iconscout.com/3d/premium/thumb/global-location-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--world-logo-worldwide-objects-vol-2-pack-miscellaneous-illustrations-3580508.png?f=webp" 
      className="rounded-lg max-w-full h-auto" 
    />
  </div>
  <div className="md:w-1/2 space-y-4 text-center md:text-left">
    <h1 className="text-3xl font-bold text-foreground mb-4">On LEARNN, you get</h1>
    <div>
      <h2 className="text-xl font-semibold text-accent">Comprehensive Digital Notes.</h2>
      <p className="text-muted-foreground">Emphasize the extensive collection of notes covering various CSBS subjects, providing students with a one-stop resource for their studies.</p>
    </div>
    <div>
      <h2 className="text-xl font-semibold text-accent">Organized and User-Friendly Interface.</h2>
      <p className="text-muted-foreground">Highlight the website's intuitive design, making it easy for students to navigate and find the information they need.</p>
    </div>
    <div>
      <h2 className="text-xl font-semibold text-accent">Mobile Accessibility.</h2>
      <p className="text-muted-foreground">Our latest Mention that the website is optimized for mobile devices, allowing students to access notes and study materials on the go.</p>
    </div>
    <div>
      <h2 className="text-xl font-semibold text-accent">Search Functionality.</h2>
      <p className="text-muted-foreground">Organized search and filter options, such as by semester, subject, or topic, save time and make the website user-friendly, especially when searching for specific content.</p>
    </div>
  </div>
</div>

<div className="bg-background py-40">
  <h1 className="text-3xl font-bold text-center mb-4">
    Join the New Era of <span className="text-accent">CSBS Engineers</span>
  </h1>
  <p className="text-center text-muted-foreground mb-8">Learn from the elite. Break the mold!</p>
  <div className="flex flex-col items-center md:flex-row justify-center space-y-20 md:space-y-0 md:space-x-60">
    <div className="text-center">
      <img className="rounded-full w-32 h-32 mb-2 mx-auto" src="https://media.licdn.com/dms/image/v2/D5603AQHPmIdZyqtAug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713038104129?e=1730332800&v=beta&t=mG3T9YaaCf91fXlXcvo3tuVhgFYlAAUBhu95RboBwHY" alt="Shouvik Baidya" />
      <h2 className="text-lg font-semibold text-secondary">&gt;Shouvik Baidya</h2>
      <p className="text-muted-foreground">AIML & Prompt Engineering Enthusiast, CSBS Undergraduate @TINT 
        <br />
        <a class="underline text-blue-500 cursor-pointer" href="https://www.linkedin.com/in/shouvik-baidya-388943243/">LinkedIn Profile</a></p>
      <link rel="stylesheet" href="" />
    </div>
    <div className="text-center">
      <img className="rounded-full w-32 h-32 mb-2 mx-auto" src="https://i.imgur.com/gt4ydgt.png" alt="Anindya Sundar Layek" />
      <h2 className="text-lg font-semibold text-secondary">&gt;Anindya Sundar Layek</h2>
      <p className="text-muted-foreground">AIML & Full-Stack Enthusiast, CSBS Undergraduate @TINT 
        <br />
        <a class="underline text-blue-500 cursor-pointer" href="https://www.linkedin.com/in/anindya-sundar-layek-61041b222/">LinkedIn Profile</a></p>
    </div>
  </div>
</div>



<Link to="/">
  <button className='bg-accent text-white px-5 py-2 rounded-md hover:bg-pink-500 duration-300 mt-6 mb-2 ml-3'>&lt;Back</button>
</Link>

    </>
  )
}

export default About