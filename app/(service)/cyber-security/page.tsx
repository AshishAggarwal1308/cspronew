"use client";
import ServiceHero from '@/app/Components/ServiceHero';
import ServiceIntro from '@/app/Components/Servicecomp/ServiceIntro';
import CyberSecurityServicesPage from '@/app/Components/Servicecomp/CyberSecurity';
import React from 'react';
import WhyUs from '@/app/Components/Servicecomp/WhyUs';

const pageTitle = "Discover Advanced Cybersecurity Services with CSPROTECHNOLOGY";
const pageSubtitle = "Protect your business with cutting-edge cybersecurity solutions tailored to your needs.";
const buttonText = "Contact now";
const buttonLink = "/Contact";
const backgroundImage = "/cyber.jpg";

const title = "Comprehensive Cybersecurity Services for Your Business";
const para1 = "At CSPROTECHNOLOGY, we provide top-notch cybersecurity services designed to protect your business from emerging threats. Our experts employ the latest technologies and methodologies to safeguard your data, networks, and systems.";
const para2 = "We offer a wide range of cybersecurity solutions including threat detection and response, vulnerability assessments, and security audits. Partner with CSPROTECHNOLOGY to ensure your business remains secure in the ever-evolving digital landscape.";

export default function Page() {
  return (
    <div>
      <title>Cyber Security Services Company | CSProTechnology</title>
      <meta name="description" content="CSProTechnology: Trusted cyber security services company, safeguarding businesses with advanced solutions. Protect your data and operations. Contact us today!" />
      <ServiceHero
        title={pageTitle}
        subtitle={pageSubtitle}
        buttonText={buttonText}
        buttonLink={buttonLink}
        backgroundImage={backgroundImage}
      />
      <ServiceIntro Title={title} para1={para1} para2={para2} />
      <WhyUs
  Service="Cybersecurity"
  description="Safeguard your business with our comprehensive cybersecurity solutions. We protect your data, networks, and systems from evolving threats. Our experts leverage advanced technologies and methodologies to provide threat detection, vulnerability assessments, security audits, and comprehensive security strategies. Partner with CSPROTECHNOLOGY for peace of mind in the digital world."
/>
      <CyberSecurityServicesPage />
    </div>
  );
}
