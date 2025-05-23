"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
  interface ProjectProps {
  image: string; // Assuming 'image' is a URL (string)
  link: string;  // Assuming 'link' is a URL (string)
  title: string; // Assuming 'title' is a string
}//hey this is my portfolio

export const Projects = ({image,link,title}:ProjectProps) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
    
    <section id='projects' className="project-container ">

 <Link href={link}>
 <motion.div
      className="bg-linear-65 from-purple-500 to-pink-500 rounded-lg p-4 shadow-md overflow-hidden cursor-pointer"
      initial={{ width: 120, height: 100 }}
      whileHover={{
        width: 600,
        height: 350,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      <div className="">
        <h3 className="text-lg font-semibold mb-2 gorup-hover:opacity-0 ">Project!</h3>      
      </div>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:isHovered?1:0}}
      transition={{duration:0.2, delay:isHovered?0.2:0}}
      className='project-contents-container flex flex-row '>
        <div className="flex flex-col gap-2">
          <h1 className='text-2xl font-medium'>{title}</h1>
          <div>
            <button>Next.js</button>
            <button>React</button>
            <button>Tailwind CSS</button>
          </div>
        </div>
        <div>
          <img src={image} alt="image" />
        </div>

      </motion.div>
    </motion.div>
 </Link>


 
    </section></>
  )
}
