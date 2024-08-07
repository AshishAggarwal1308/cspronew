"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const CompanyFounders = () => {
  const founder1Ref = useRef<HTMLDivElement>(null);
  const founder2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      founder1Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: founder1Ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false, 
        },
      }
    );

    gsap.fromTo(
      founder2Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: founder2Ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="container max-w-7xl mx-auto mt-24 p-6">
      <div className="space-y-24">
        <div ref={founder1Ref} className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <motion.img
              src="https://media.licdn.com/dms/image/D4D03AQFQrDKguGu26g/profile-displayphoto-shrink_800_800/0/1718287868469?e=1724889600&v=beta&t=dKAM4hyVWqOh2c7ugDLv0WzTY2zL7wKUhEBPINThXmE" // Replace with actual image path
              alt="Founder 1"
              className="rounded-full h-40 w-40 lg:h-64 lg:w-64 object-cover shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl  text-[#7a2536]  font-bold mb-4">Mr Chandra Gupta</h2>
              <p className="text-lg max-w-xl mx-auto lg:mx-0">
              At CSPRO Technology, we are committed to delivering excellence in every project we undertake. Our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and success. Whether you are a startup, a growing enterprise, or an established organization, our team of experienced professionals is dedicated to providing tailored IT services that meet your unique needs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyFounders;
