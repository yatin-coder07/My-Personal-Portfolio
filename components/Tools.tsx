import React from 'react'

const Tools = () => {
  return (
    <>

    <div id='skills' className="skills-container">
        <h1 className='font-medium  text-2xl sm:text-4xl'>
            My Skills
        </h1>
        <p className='font-medium text-[15
        px] sm:text-[20px]'>
          The powerfull tools and technologies I use <br />
          to create high-performing and exceptional websites.   
        </p>
    </div>
     <section  className='grid sm:grid-cols-3 grid-cols-1 sm:mt-20 sm:mb-20 gap-5 md:grid-cols-4 sm:mr-15'>

        

<div className="tools-container">
   <div className="tool">
       <div className="logo ">
           <img src={"/typeScript.png"} alt="" />
       </div>

       <div className="tool-desc-container">
           <div>
               <h1 className='font-medium'>Type Script</h1>
           </div>
           <div className='text-[15px]'>
               <p>Interactivity</p>
           </div>

       </div>
       
   </div>
</div>


<div className="tools-container">
   <div className="tool">
       <div className="logo ">
           <img src={"/TailwindCSS.png"} alt="" />
       </div>

       <div className="tool-desc-container">
           <div>
               <h1 className='font-medium'>Tailwind CSS</h1>
           </div>
           <div className='text-[15px]'>
               <p>Styling</p>
           </div>

       </div>
       
   </div>
</div>

<div className="tools-container">
   <div className="tool">
       <div className="logo ">
           <img src={"/js.png"} alt="" className='h-13' />
       </div>

       <div className="tool-desc-container">
           <div>
               <h1 className='font-medium'>Java Script</h1>
           </div>
           <div className='text-[15px]'>
               <p>Interactivity</p>
           </div>

       </div>


       
   </div>
</div>
  

<div className="tools-container">
   <div className="tool">
       <div className="logo ">
           <img src={"/figma.png"} alt="" />
       </div>

       <div className="tool-desc-container">
           <div>
               <h1 className='font-medium'>Figma</h1>
           </div>
           <div className='text-[15px]'>
               <p>Designing</p>
           </div>

       </div>
       
   </div>
</div>

<div className="tools-container">
   <div className="tool">
       <div className="logo ">
           <img src={"/react.png"} alt="" />
       </div>

       <div className="tool-desc-container">
           <div>
               <h1 className='font-medium'>React</h1>
           </div>
           <div className='text-[15px]'>
               <p>Library</p>
           </div>

       </div>
       
   </div>

   
</div>

<div className="tools-container">
   <div className="tool">
       <div className="logo ">
           <img src={"/Nextjs.png"} alt="" />
       </div>

       <div className="tool-desc-container">
           <div>
               <h1 className='font-medium'>Next.js 15</h1>
           </div>
           <div className='text-[15px]'>
               <p>Framework</p>
           </div>

       </div>
       
   </div>

   
</div>

<div className="tools-container">
   <div className="tool">
       <div className="logo ">
           <img src={"/Git.png"} alt="" />
       </div>

       <div className="tool-desc-container">
           <div>
               <h1 className='font-medium'>Git</h1>
           </div>
           <div className='text-[15px]'>
               <p>Code</p>
           </div>

       </div>
       
   </div>

   
</div>
<div className="tools-container">
   <div className="tool">
       <div className="logo ">
           <img src={"/GitHub.png"} alt="" />
       </div>

       <div className="tool-desc-container">
           <div>
               <h1 className='font-medium'>GitHub</h1>
           </div>
           <div className='text-[15px]'>
               <p>Platform</p>
           </div>

       </div>
       
   </div>

   
</div>

<div className="tools-container">
   <div className="tool">
       <div className="logo ">
           <img src={"/Python.png"} alt="" />
       </div>

       <div className="tool-desc-container">
           <div>
               <h1 className='font-medium'>Python</h1>
           </div>
           <div className='text-[15px]'>
               <p>Backend</p>
           </div>

       </div>
       
   </div>

   
</div>

 
   
</section>
    </>
   
  )
}

export default Tools