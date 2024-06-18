"use client"
import ServiceHero from '@/app/Components/ServiceHero'
import AppDevelopmentPage from '@/app/Components/Servicecomp/appdev';
import React from 'react'

const pageTitle = "Discover Advanced AI Services for Your Business";
const pageSubtitle = "Transform your business with cutting-edge AI solutions tailored to your needs.";
const buttonText = "Contact now";
const buttonLink = "/Contact"; 
const backgroundImage = "/App.jpg"
export default function page() {
  return (
    <div>
      <ServiceHero  title={pageTitle} subtitle={pageSubtitle} buttonText={buttonText} buttonLink={buttonLink} backgroundImage={backgroundImage}  />
      <AppDevelopmentPage />
    </div>
  )
}
