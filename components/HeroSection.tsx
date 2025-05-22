"use client"
import Link from 'next/link'
import React from 'react'
import Tools from './Tools'
import {Projects} from './Projects'
import Footer from './Footer'
import { AnimatePresence , motion} from 'framer-motion'


export const HeroSection = () => {
  interface ProjectProps {
  image: string; // Assuming 'image' is a URL (string)
  link: string;  // Assuming 'link' is a URL (string)
  title: string; // Assuming 'title' is a string
}
  const images =[{
    id:1,
    imageUrl:"/dogSite.jpg",
    link:"https://pawsitive-alpha.vercel.app/",
    title:"Dog Adoption Website"

  },
    {id:2,
      imageUrl:"/cryptoSite.jpg",
      link:"https://cryp-check.vercel.app/",
      title:"Crypto Price Checker"
    },
    {id:3,
      imageUrl:"/eStore.jpeg",
      link:"/",
      title:"E-commerce Store"
    }]
  return (
  <>
    <AnimatePresence>
      <section id='home' className='hero-container'>
       <motion.div 
       layout
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],}}
       
       className='flex flex-row'>
       <div className="hero-description">
          <div  className='description-text'>
            <div><h1>Aspiring</h1></div>
            <div><h2>Full-Stack</h2></div>
            <div><h3 className='text-[#909090]'>
                Web Developer
            </h3></div>
          </div>
          <div className="   hero-btns ">
           <Link href={'https://github.com/yatin-coder07'}>
           <button className="contact  ">Projects</button></Link>
           <Link href={'#about'}>
           <button className="contact  ">Read More</button></Link>
            
          </div>
        </div>
       </motion.div>
        <motion.div
        layout
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
        transition={{
        duration: 0.9,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],}}
        className="sm:h-80 sm:w-80  h-60 w-60 md:h-90 md:w-90 ">
            <img src={"/pfp.jpg"} alt="" className='rounded-full' />
        </motion.div>
    </section>
    </AnimatePresence>
    <section id='about' className=' sm:mt-55 mt-15'>
        <div className='p-5 bg-linear-65 from-purple-500 to-pink-500   sm:m-10 m-10 md:text-[15px] md:font-medium rounded-2xl dark:text-gray-100 font-medium '>
           <p>
            Welcome! I am Yatin a Web Developement enthusiast, With a liking to <br />
            creating visually stunning and highly functional websites. <br />
            I am currently in my Second year at Gurunanak dev university <br />
            I am an eager learner who is working hard to improve everyday.
            </p> 
            <h1 className='text-3xl font-bold mt-3'>
                5<span className='text-2xl text-cyan-600 '>+</span>
            </h1>
            <p> Projects created</p>
        </div>
        </section>

        <Tools/>
         <div className="text-4xl font-medium mt-30 mb-20 flex justify-center items-center ">
            <h1>My Project <span className='text-[#484949] dark:text[]'>Highlights</span></h1>
        </div>


        <div className='gap-5 
        mt-30 mb-10 flex flex-col justify-evenly'>
          {images.map((image,index)=>(
            <Projects key={image.id} image={image.imageUrl} link={image.link} title={image.title}/>
          ))}
        </div>



        <div className='mt-40 mb-30'>
         <Footer/>
        </div>
        </>
   
  )
}

