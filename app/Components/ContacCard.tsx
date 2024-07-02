"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const ContactCards = () => {
  const addressRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      addressRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: addressRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false, 
        },
      }
    );

    gsap.fromTo(
      emailRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: emailRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false,
        },
      }
    );

    gsap.fromTo(
      phoneRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false, 
        },
      }
    );
  }, []);

  return (
    <div className="container mx-auto mt-24 p-6">
      <div className="flex flex-col md:flex-row justify-center md:space-x-8">
        <motion.div
          ref={addressRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white shadow-lg rounded-lg flex-1 p-6"
        >
          <div className="flex items-center mb-4" style={{gap:'4px'}}>
            <FaLocationDot style={{color:'#AE1D38' ,fontSize:'24px'}}/>
            <h2 className="text-xl font-bold">Address</h2>
          </div>
          <p className="text-lg">
            Office No 32, S.J and Market, Bhondsi, Sohna Road, Gurugram, Haryana, India-122102
          </p>
        </motion.div>

        <motion.div
          ref={emailRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white shadow-lg rounded-lg flex-1 p-6 mt-6 md:mt-0"
        >
          <div className="flex items-center mb-4" style={{gap:'4px'}}>
            <IoMail style={{color:'#AE1D38' ,fontSize:'24px'}}/>
            <h2 className="text-xl font-bold">Email</h2>
          </div>
          <p className="text-lg">info@csprotechnology.com</p>
        </motion.div>

        <motion.div
          ref={phoneRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white shadow-lg rounded-lg flex-1 p-6 mt-6 md:mt-0"
        >
          <div className="flex items-center mb-4" style={{gap:'4px'}}>
            <FaPhoneSquareAlt style={{color:'#AE1D38' ,fontSize:'24px'}} />
            <h2 className="text-xl font-bold">Phone Number</h2>
          </div>
          <p className="text-lg">+91 7042022099</p>
        </motion.div>
      </div>
    </div>
  );
};
export default ContactCards