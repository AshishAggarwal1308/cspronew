"use client";
import ServiceHero from '@/app/Components/ServiceHero';
import ServiceIntro from '@/app/Components/Servicecomp/ServiceIntro';
import CloudComputingPage from '@/app/Components/Servicecomp/CloudComputing';
import React from 'react';
import WhyUs from '@/app/Components/Servicecomp/WhyUs';

const pageTitle = "Discover Advanced Cloud Computing Services with CSPROTECHNOLOGY";
const pageSubtitle = "Transform your business with cutting-edge cloud solutions tailored to your needs.";
const buttonText = "Contact now";
const buttonLink = "/Contact";
const backgroundImage = "/cloud.jpg";

const title = "Cloud Computing Services to Empower Your Business";
const para1 = "At CSPROTECHNOLOGY, we offer comprehensive cloud computing services designed to meet the unique demands of your business. Our cloud solutions help you scale your operations, improve efficiency, and reduce costs. We provide a range of services including cloud migration, cloud infrastructure management, and cloud-based application development.";
const para2 = "Our team of experts works with leading cloud platforms such as AWS, Azure, and Google Cloud to deliver reliable and secure cloud solutions. Whether you're looking to migrate to the cloud or optimize your existing cloud infrastructure, CSPROTECHNOLOGY has the expertise to help you succeed. Partner with us to leverage the full potential of cloud computing for your business.";

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
  Service="Cloud Computing"
  description="Unlock the power of cloud computing with CSPROTECHNOLOGY. We offer comprehensive cloud solutions to scale your operations, improve efficiency, and reduce costs. Leverage our expertise in cloud migration, management, and development to achieve your business goals."
/>
<CloudComputingPage />



    </div>
  );
}
