"use client";
import ServiceHero from '@/app/Components/ServiceHero';
import ServiceIntro from '@/app/Components/Servicecomp/ServiceIntro';
import WebDevelopmentPage from '@/app/Components/Servicecomp/WebDev';
import WhyUs from '@/app/Components/Servicecomp/WhyUs';
import React from 'react';

const pageTitle = "Discover Advanced AI Services for Your Business";
const pageSubtitle = "Transform your business with cutting-edge AI solutions tailored to your needs.";
const buttonText = "Contact now";
const buttonLink = "/Contact";
const backgroundImage = "/webdev.jpg";

const title = "Innovative Web Development Solutions for Modern Businesses";
const para1 = "At our company, we specialize in providing advanced AI services that help businesses optimize their operations and achieve their goals. Our team of experts utilizes the latest AI technologies to deliver solutions that are tailored to your unique needs.";
const para2 = "From predictive analytics to natural language processing, our AI services cover a wide range of applications. Partner with us to leverage the power of AI and drive innovation in your business.";

const description=""

export default function Page() {
  return (
    <div>
      <ServiceHero
        title={pageTitle}
        subtitle={pageSubtitle}
        buttonText={buttonText}
        buttonLink={buttonLink}
        backgroundImage={backgroundImage}
      />
      <ServiceIntro Title={title} para1={para1} para2={para2} />
      <WhyUs
  Service="Data Analytics"
  description="Unlock the power of your data with our comprehensive data analytics services. Our experts help you extract valuable insights from complex data sets using advanced analytics techniques. We offer data visualization, predictive analytics, and big data management solutions to empower you with data-driven decision making, drive business growth, and gain a competitive edge."
/>
         <WebDevelopmentPage />
    </div>
  );
}
