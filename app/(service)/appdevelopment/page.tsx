"use client";
import ServiceHero from '@/app/Components/ServiceHero';
import ServiceIntro from '@/app/Components/Servicecomp/ServiceIntro';
import WhyUs from '@/app/Components/Servicecomp/WhyUs'; // Import WhyUs component
import AppDevelopmentPage from '@/app/Components/Servicecomp/appdev'; // Import AppDevelopmentPage component
import React from 'react';

const service = "App Development";
const description = "Elevate your business with our comprehensive app development services. We create custom mobile and web applications tailored to your specific needs. Our team leverages the latest technologies to deliver user-friendly, secure, and scalable apps that drive growth and efficiency.";

const pageTitle = "Discover Advanced App Development Services for Your Business";
const pageSubtitle = "Transform your business with cutting-edge app development solutions tailored to your needs.";
const buttonText = "Contact now";
const buttonLink = "/Contact";
const backgroundImage = "/App.jpg"; // Replace with your image path

const title = "App Development Services to Elevate Your Business";
const para1 = "At CSPROTECHNOLOGY, we specialize in creating innovative and high-performance mobile and web applications. Our team of experienced developers utilizes the latest technologies and frameworks to build custom apps that meet your unique business needs. From initial concept to deployment, we work closely with you to ensure the final product exceeds your expectations.";
const para2 = "Our app development services cover a wide range of industries, including eCommerce, healthcare, finance, and more. We focus on delivering user-friendly, secure, and scalable applications that drive growth and efficiency for your business. Partner with us to bring your app ideas to life and stay ahead in the competitive market.";

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
      <WhyUs Service={service} description={description} /> 
      <AppDevelopmentPage />
    </div>
  );
}
