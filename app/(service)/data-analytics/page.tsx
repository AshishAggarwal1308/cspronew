"use client";
import ServiceHero from '@/app/Components/ServiceHero';
import DataAnalystServicesPage from '@/app/Components/Servicecomp/DataAnalystService';
import ServiceIntro from '@/app/Components/Servicecomp/ServiceIntro';
import WhyUs from '@/app/Components/Servicecomp/WhyUs';
import React from 'react';

const pageTitle = "Discover Advanced Data Analytics Services with CSPROTECHNOLOGY";
const pageSubtitle = "Transform your business with cutting-edge data analytics solutions tailored to your needs.";
const buttonText = "Contact now";
const buttonLink = "/Contact";
const backgroundImage = "/data-analytics.jpg";

const title = "Comprehensive Data Analytics Services for Your Business";
const para1 = "At CSPROTECHNOLOGY, we provide top-notch data analytics services designed to help your business make informed decisions. Our experts leverage advanced analytics techniques to uncover insights from your data, enabling you to drive growth and efficiency.";
const para2 = "We offer a wide range of data analytics solutions including data visualization, predictive analytics, and big data management. Partner with CSPROTECHNOLOGY to harness the power of your data and gain a competitive edge in your industry.";

export default function Page() {
  return (
    <div>
      <title>Data Analytics Services Company | CSProTechnology</title>
      <meta name="description" content="CSProTechnology: Leading data analytics services company, delivering actionable insights for business growth. Unlock the power of data with our expert solutions." />
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

      <DataAnalystServicesPage />
    </div>
  );
}
