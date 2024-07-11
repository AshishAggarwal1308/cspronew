"use client"
import React from 'react';
import ServiceHero from '@/app/Components/ServiceHero';
import AIServicesPage from '@/app/Components/Servicecomp/Ai';
import ServiceIntro from '@/app/Components/Servicecomp/ServiceIntro';
import WhyUs from '@/app/Components/Servicecomp/WhyUs';

const service = "AI";
const description = "Unlock the power of AI to automate tasks, gain valuable insights from data, and optimize your business processes. Our AI services encompass natural language processing, computer vision, predictive analytics, and more. We help you create intelligent applications that streamline operations, improve decision-making, and drive innovation.";

const pageTitle = "Discover Advanced AI Services for Your Business";
const pageSubtitle = "Transform your business with cutting-edge AI solutions tailored to your needs.";
const buttonText = "Contact now";
const buttonLink = "/Contact";
const backgroundImage = "/Ai.jpg";

const title = "AI Services to Revolutionize Your Business";
const para1 = "At csprotechnology, we harness the power of Artificial Intelligence to deliver transformative solutions. Our team of AI experts works with advanced algorithms and machine learning models to provide customized AI services. Whether you're looking to automate processes, gain insights from data, or develop intelligent applications, we have the expertise to help you achieve your goals.";
const para2 = "Our AI services include natural language processing, computer vision, predictive analytics, and more. We have empowered numerous clients with AI-driven solutions that enhance efficiency, improve decision-making, and drive innovation. Partner with us to unlock the full potential of AI for your business.";

export default function Page() {
  return (
    <div>
      <title>Artificial Intelligence Services Company | CSProTechnology</title>
      <meta name="description" content="CSProTechnology: Leading Artificial Intelligence services company, transforming businesses with cutting-edge AI solutions. Contact us today to innovate and grow your business!" />
      <ServiceHero
        title={pageTitle}
        subtitle={pageSubtitle}
        buttonText={buttonText}
        buttonLink={buttonLink}
        backgroundImage={backgroundImage}
      />
      <ServiceIntro Title={title} para1={para1} para2={para2} />
      <WhyUs Service={service} description={description} />
      <AIServicesPage />
    </div>
  );
}
