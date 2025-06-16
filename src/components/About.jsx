import React from 'react'
import mobile from '../assets/1497f2fc-d952-4a91-8bc5-9c64b22ed219.jpg'

const  About = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
      <div class="py-16 mb-6 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 relative bg-black/40 max-w-[1300px] mx-auto rounded-xl ">
        <div class="p-7 mx-auto">
            <div>
                <h2 class="text-3xl font-bold leading-tight gray-primary-color sm:text-4xl lg:text-5xl">Hello, I am <span className='italic'>Ken</span></h2>
                <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8">
                Welcome.
I’m Ken Alcala.
This is a collection of work, shaped by curiosity, growth, and life’s quiet lessons.
Simple. Honest. Evolving.
                </p>
            </div>
            <img class="flex md:absolute mx-auto bottom-[-1%] right-[20%] w-[240px] md:w-[450px] h-auto" src={mobile} alt=""/>
        </div>
      </div>
      <div class="bg-black/40 max-w-[1300px] mx-auto rounded-xl overflow-hidden">
            <div class="px-6 py-10">
                <div class="mx-auto max-w-5xl text-center">
                    <h2 class="block w-full gray-primary-color text-3xl sm:text-4xl">
                        Goals
                    </h2>
                    <p class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium
                                    leading-relaxed tracking-wide text-gray-400">
                        Here are some of my goals to achieve while in and after college.
                    </p>
                </div>
                <div class="mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                      <h3 class="text-xl italic text-gray-200">Expand</h3>
                        <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                        I am eager to expand my knowledge and skills both during and after college. I aim to continuously grow through learning and hands-on experience, seeking opportunities that challenge me and allow me to further develop my expertise in various fields.
                        </p>
                    </div>      
                    <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                      <h3 class="text-xl italic text-gray-200">Explore</h3>
                        <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                        I am passionate about exploring different areas of knowledge and skill development throughout my college years and beyond. I’m excited to venture into new fields, embrace diverse learning experiences, and discover pathways that will help me grow both personally and professionally.
                        </p>
                    </div> 
                    <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                      <h3 class="text-xl italic text-gray-200">Learn</h3>
                        <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                        I’m driven by a desire to learn continuously during college and beyond. I want to acquire new skills, deepen my understanding across various fields, and embrace every learning opportunity that comes my way to grow both academically and professionally.
                        </p>
                    </div>   
                </div>
            </div>
      </div>
    </div>
  )
}

export default  About