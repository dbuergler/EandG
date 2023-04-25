import React from 'react'
import open from '../public/hero.jpg';
import Image from 'next/image';

const About = () => {
    return (
        <div className='flex h-screen justify-center items-center flex-col font-sans'>
            <div className='bg-hero bg-cover bg-center bg-fixed w-full h-[50vh] bg-opacity-50'>
                <h1 className='flex justify-center text-white text-7xl p-44 font-bold'>About Us</h1>
            </div>
            <h2 className='p-8 text-2xl font-bold'>Welcome to our Eloise & George!</h2>
            <p className=' items-center text-center justify-center flex m-4 tracking-wide mx-80'>

            At our store, we understand the joy and challenges that come with being a parent. We want to make your journey a little bit easier by providing you with everything you need to care for your little one.
            </p>
            <p className=' items-center text-center justify-center flex m-4 tracking-wide mx-80'>Our store offers a wide selection of high-quality products that are specifically designed for babies, from newborns to toddlers. Whether you are looking for clothing, toys, feeding supplies, or nursery essentials, we have got you covered.

            We are committed to providing you with the best possible shopping experience. Our friendly and knowledgeable staff is always on hand to assist you in finding the right products for your baby's needs. We also offer online shopping for your convenience, so you can shop from the comfort of your own home.

            Our store values safety above all else. All of our products are carefully selected to ensure they meet the highest safety standards. We understand that you want only the best for your baby, and we strive to provide you with peace of mind by offering products that are safe, durable, and reliable.</p>
            <p className=' items-center text-center justify-center flex m-4 tracking-wide mx-80'>Thank you for choosing our baby store for all of your baby's needs. We look forward to helping you on your journey as a parent!</p>
        </div>
    )
}

export default About;


