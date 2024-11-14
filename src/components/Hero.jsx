import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

import notebookL from '../assets/50e66aef-8191-4406-b73f-f4a03821f04b.jpg'


const Hero = () => {
  return (
    <div className="relative pt-16 pb-10 sm:pt-16 sm:pb-16 overflow-hidden h-[92vh]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-xl mx-auto text-center">
                <h1 className="text-4xl font-bold sm:text-6xl gray-primary-color">
                    Computer Scientist
                </h1>
                <p className="mt-5 text-base text-white sm:text-xl">
                    3rd Year Computer Science Student. Welcome To My Website Portfolio!
                </p>
                
                <div className="flex flex-row justify-between text-white p-8 max-w-[500px] mx-auto">
                  <a href="https://github.com/KenAlcala" className='transition-all duration-200 hover:scale-110 cursor-pointer'>
                    <AiFillGithub className='w-[70px] h-auto'/>
                  </a>
                  <a href="https://www.instagram.com/ken.alcala/profilecard/?igsh=M3hkYmZnZDdhOGl3" className='transition-all duration-200 hover:scale-110 cursor-pointer'>
                    <AiFillInstagram className='w-[70px] h-auto'/>
                  </a>
                  <a href="https://www.facebook.com/kenalcala12?mibextid=ZbWKwL" className='transition-all duration-200 hover:scale-110 cursor-pointer'>
                    <AiFillFacebook className='w-[70px] h-auto'/>
                  </a>
                </div>
            </div>
            <div className="relative bottom-0 z-10 flex mx-auto justify-center">
              <img 
                className="left-[-200px] top-[-20px] sm:left-[-100px] sm:top-[-400px] absolute block w-full sm:w-auto h-auto sm:h-[500px]" 
                src={notebookL} alt="Notebook Large"
              />
              
            </div>
        </div>
    </div>
  )
}

export default Hero