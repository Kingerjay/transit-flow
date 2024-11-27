import React from 'react'
import SectionProps from '../SectionProps'
import AboutSectionOne from '../about/AboutSectionOne'
import ServicesSection from '../about/ServicesSection'
import TeamSection from '../about/TeamSection'
import TestimonialSection from '../about/TestimonialSection'
import PricingSection from '../about/PricingSection'
import FaqSection from '../about/FaqSection'
import ClientLogoSection from '../about/ClientLogoSection'
import img from '/src/assets/about-props-back.png'

function About() {
  return (
    <div>
      <SectionProps 
      img={`${img}`} 
      subText = "About us"
        heroHeader = "About Our Logistics"
        
      />
      <AboutSectionOne />
      <ServicesSection />
      <TeamSection />
      <TestimonialSection /> 
      <PricingSection />
      <FaqSection />
      <ClientLogoSection />
    </div>
  )
}

export default About