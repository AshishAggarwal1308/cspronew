import Image from 'next/image';
import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
    const currentData = new Date().getFullYear();
    return (
        <footer className="relative w-full bg-blue-gray-50 pt-6 ">
            <div className="w-full px-12 ">
                <div className="grid justify-between grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <Image className='h-auto w-auto' alt='logo' height={200} width={200} priority src="/logo.png" />
                        <p className='max-w-72 pt-2 text-gray-600'>CSProTechnology, is dedicated to providing comprehensive IT services that empower businesses to thrive in the digital age. With a team of experienced professionals and a commitment to excellence, we offer a wide range of solutions tailored to meet the unique needs of each client.</p>
                    </div>
                    <div className="grid justify-between grid-cols-3 gap-4">
                        {/* <ul>
                            <p className="block mb-3 font-sans text-sm font-medium leading-normal text-blue-gray-900 opacity-40">
                                Product
                            </p>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Tutorials
                                </a>
                            </li>
                        </ul> */}
                        <ul>
                            <p className="block mb-3 font-sans text-sm font-medium leading-normal text-blue-gray-900 opacity-40">
                                Company
                            </p>
                            <li>
                                <a href="/About" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="/Tech" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a href="/Contact" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <p className="block mb-3 font-sans text-sm font-medium leading-normal text-blue-gray-900 opacity-40">
                                Policies
                            </p>
                            <li>
                                <a href="/Terms" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="/Privacy" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/Refund" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Refund Policy
                                </a>
                            </li>
                            <li>
                                <a href="/Shipping" className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-blue-gray-900">
                                    Shipping Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-blue-gray-50 md:flex-row md:justify-between">
                    <p className="block mb-4 font-sans text-sm font-normal leading-normal text-center text-blue-gray-900 md:mb-0">
                        © {currentData}{" "}
                        <a href="/" className="text-blue-900 hover:underline">
                            Csprotechnology            </a>
                        . All Rights Reserved.
                    </p>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <a href="#" className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
                            <FaFacebookSquare style={{fontSize:'24px'}}/>
                        </a>
                        <a href="#" className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
                            <RiInstagramFill style={{fontSize:'24px'}}/>
                        </a>
                        <a href="#" className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
                            <FaLinkedin style={{fontSize:'24px'}}/>
                        </a>
                        <a href="#" className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
                            <FaSquareXTwitter style={{fontSize:'24px'}}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
