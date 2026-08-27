import React from 'react'
import { Component } from '../components/Navbar'
import HeaderFooter from '../components/Footer'
import logo from "../assets/logo 2.png"; 

export default function About_me() {
  return (
   <div className="min-h-screen bg-[rgb(0,0,0)] px-6 md:px-16 relative overflow-hidden">
    <Component/>
    <br /><br />
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

  {/* IMAGE – LEFT SIDE */}
  <div className="flex items-center gap-4 order-1 md:order-1">
    <img
      className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left"
      src={logo}
      alt="Profile"
    />
  </div>


  <div className="order-2 md:order-2">
    <span className="inline-block bg-white px-4 py-2 rounded-full text-sm mb-6">
   Welcome to the world of MERN Stack Developer !
    </span>

    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
      <span className="text-blue-500">I'm Fuzail Raza</span>
      
    
    </h1>
<p className="text-white mb-8 leading-relaxed">
  I am a dedicated MERN Stack Developer who enjoys building modern, fast, and responsive web
  applications. My expertise includes MongoDB, Express.js, React.js, and Node.js, along with
  creating secure backend APIs and intuitive user interfaces. Over the past 6 months of freelancing,
  I have worked with local clients to deliver reliable, scalable, and responsive web solutions while
  following clean coding practices and modern development standards.
</p>

    
  </div>

</div>

<br /><br /><br /> 


    <HeaderFooter/>
    </div>
  )
}
