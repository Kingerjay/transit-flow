import React from 'react'
import ServiceSectionOne from '../service/ServiceSectionOne'
import ServicesSection from '../service/ServicesSection'
import TestimonialSection from '../service/TestimonialSection'

function Service() {
  return (
    <div>
        <SectionProps 
      img={"src/assets/about-props-back.png"} 
      subText = "Services"
        heroHeader = "Our Logistics Service"
        
      />
        <ServicesSection />
        <ServiceSectionOne />
        <TestimonialSection />
    </div>
  )
}

export default Service