import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './theme-btn'

const Navbar = () => {
  return (
    <section className='header-container'>
        <div className="ml-2">
           <Link href={"/"}>
           <h1 className='sm:text-2xl text-[20px] font-bold'>Yatin Sharma</h1>
           </Link>
        </div>
        <div className="links">
         <Link href={"#home"}>
         <p >Home</p></Link>
         <Link href={"#About"}>
         <p >About</p></Link>
         <Link href={"#skills"}>
         <p >Skills</p></Link>
         <Link href={"#projects"}>
         <p >Projects</p></Link>
        </div>
        <div className="mt-2 mr-2 ">
            <ModeToggle />
        </div>

    </section>
  )
}

export default Navbar