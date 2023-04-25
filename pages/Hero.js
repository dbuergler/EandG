import Image from 'next/image';
import React from 'react';
import hero from '../public/hero.jpg'

const Hero = () => {
    return (
        <div className= 'w-full h-screen text-center font-sans'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600 animate-fade-in-down'>Dream Big, Little One.</p>
                        <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight'>
                            Eloise & George
                        </h1>
                    <p className='py-10 text-gray-600 sm:max-w-[70%] m-auto'>
                    From baby clothes to toddler clothes and everywhere in between, we have everything you need to discover your child's personality. Keep up with the latest fasion trends for your child and let your little one dream their biggest dream yet!
                    </p>
                    <div className='flex items center justify-between max-w-[330px] m-auto py-4'>
                        <a className="inline-block px-7 py-3 mr-2 bg-[#D0634E] text-[#FFFCFB] font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#FADED2] active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                        <a className="inline-block px-7 py-3 bg-transparent text-[#D0634E] font-medium text-sm leading-snug uppercase rounded hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
                    </div>
                    </div>
                </div>
                
            </div>
    )
}

export default Hero;





                                    <div className='py-4'>
                                        <a className="inline-block px-7 py-3 mr-2 bg-[#D0634E] text-[#FFFCFB] font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#FADED2] active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                                        <a className="inline-block px-7 py-3 bg-transparent text-[#D0634E] font-medium text-sm leading-snug uppercase rounded hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
                                    </div>
                            
