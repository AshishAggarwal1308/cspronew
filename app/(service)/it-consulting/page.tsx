"use client";
import ServiceHero from '@/app/Components/ServiceHero';
import ITConsultingServicesPage from '@/app/Components/Servicecomp/Consulting';
import ServiceIntro from '@/app/Components/Servicecomp/ServiceIntro';
import WhyUs from '@/app/Components/Servicecomp/WhyUs'; // Import WhyUs component
import React from 'react';

const pageTitle = "Discover Advanced Cloud Consulting Services with CSPROTECHNOLOGY";
const pageSubtitle = "Transform your business with cutting-edge cloud consulting solutions tailored to your needs.";
const buttonText = "Contact now";
const buttonLink = "/Contact";
const backgroundImage = "/consult.jpg";

const title = "Cloud Consulting Services to Empower Your Business";
const para1 = "At CSPROTECHNOLOGY, we offer comprehensive cloud consulting services designed to meet the unique demands of your business. Our cloud solutions help you scale your operations, improve efficiency, and reduce costs. We provide a range of services including cloud strategy, cloud migration, and cloud infrastructure management.";
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
  Service="Cloud Consulting" 
  description="Unlock the expertise of our seasoned consultants to elevate your business with comprehensive cloud solutions. We offer strategic guidance, seamless migration, and ongoing management to optimize your cloud journey. Let CSPROTECHNOLOGY help you leverage the power of cloud computing for increased efficiency, cost savings, and business growth." // Replace with your service-specific description
/>
<ITConsultingServicesPage />
    </div>
  );
}
