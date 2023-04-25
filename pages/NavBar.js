import Link from 'next/link';
import Image from 'next/image';
import React, {useState, useRef} from 'react';
import { HiOutlineX, HiOutlineMenu, HiUserCircle, HiBell, HiShoppingCart } from 'react-icons/hi';


const NavBar = () => {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav);
    };
    

    const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };

    return (
        <div className='fixed-w-full border-b border-gray-300 py-4 font-sans'>
            <div className='flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full  flex-wrap w-full'>
                <Image src='/logo.png' width={195} height={50} className='rounded-full '></Image>
                <nav className='hidden md:flex'>
                    <ul className='flex items-center justify-between w-auto p-4'>
                       <Link href='/' className="ml-10 text-md underline decoration-transparent transition duration-100 ease-in-out hover:decoration-inherit hover:scale-110 lg:flex lg:justify-between md:px-5">
                       Home
                       </Link>
                       <Link href='/#about'className="ml-10 text-md underline decoration-transparent transition duration-100 ease-in-out hover:decoration-inherit hover:scale-110 lg:flex lg:justify-between md:px-5">
                       About
                       </Link>
                       <Link href='/#baby' className="ml-10 text-md  underline decoration-transparent transition duration-100 ease-in-out hover:decoration-inherit hover:scale-110 lg:flex lg:justify-between md:px-5">
                       Baby & Toddler
                       </Link>
                       <Link href='/#sale' className="ml-10 text-md underline decoration-transparent transition duration-100 ease-in-out hover:decoration-inherit hover:scale-110 lg:flex lg:justify-between md:px-5" >
                       Sale
                       </Link>
                    </ul>
                    <div className="items-center p-2 flex justify-center" >
                        <div className="relative mr-5">
                            <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input
                            type="text"
                            className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                            placeholder="Find a Product"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            />
                        </div>
                     </div>
                     <div className='relative flex items-center'>
                     <a className='mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400' href='/#notifications'>
                                <span className='sr-only'>View Notifications</span>
                                <HiShoppingCart className='h-9 w-9 ml-4 cursor-pointer'/>
                        </a>
                        <a className='mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400' href='/#notifications'>
                                <span className='sr-only'>View Notifications</span>
                                <HiBell className='h-9 w-9 ml-4 cursor-pointer'/>
                        </a>
                        <a className='mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400' href='/#account'>
                            <HiUserCircle className='h-9 w-9 ml-4 cursor-pointer'/>
                        </a>
                     </div>
                </nav>
                <HiOutlineMenu className='md:hidden block h-6 w-6 cursor-pointer mr-10' onClick={handleNav}/>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 font-sans" : ''}>
                    <div className={nav ? "fixed left-0 top-o w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500": "fixed left-[-100%] top-0 p-10 ease-in duration-500 font-sans"}>
                        <div>
                            <div className="flex w-full items-center justify-between">
                            <Image src='/logo.png' alt='/' width='87' height='35' className='rounded-full'></Image>
                                <div onClick={handleNav} className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                    <HiOutlineX/>
                                </div>
                            </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4 italic">Dream Big, Little One.</p>
                        </div>
                        </div>
                        <div className="py-4 flex flex-col" >
                            <ul>
                            <Link href='/'>
                                <li className="py-4 text-sm hover:scale-110 ease-in duration-300">
                                Home
                                </li>
                            </Link>
                            <Link href='/#about'>
                                <li className="py-4 text-sm hover:scale-110 ease-in duration-300">
                                About
                                </li>
                            </Link>
                            <Link href='/#baby'>
                                <li className="py-4 text-sm hover:scale-105 ease-in duration-300">
                                Baby & Toddler
                                </li>
                            </Link>
                            <Link href='/#sale'>
                                <li className="py-4 text-sm hover:scale-105 ease-in duration-300">
                                Sale
                                </li>
                            </Link>
                            </ul>
                            <div className="items-center px-4 flex justify-center" >
                                <div className="relative mr-3">
                                        <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <input
                                        type="text"
                                        className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                                        placeholder="Find a Product"
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default NavBar;