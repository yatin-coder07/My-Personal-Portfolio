import { Github, Instagram } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <section className='footer-container '>
    <div className='text-3xl md:text-5xl font-medium'>
      <h1>Lets Work <br />
      <span className='text-[#484949] text-5xl dark:text-[#B4B4B4]'>Together</span></h1>
    </div>
    <div className="socials">
   <div className="flex gap-15">
   <Link href={"https://www.instagram.com/_yatin_.sharma/?next=%2F"} className="insta">
        <Instagram/>
      </Link >
      
      <Link href={"https://github.com/yatin-coder07"} className="insta">
        <Github/>
      </Link >
   </div>
      <div className="email">
        <h1 className='text-[20px] font-medium'>Email:yatins113@gmail.com</h1>
      </div>
    </div>

   </section>
  )
}

export default Footer