import React from 'react'
import SectionProps from '../SectionProps'
import ServicesSection from '../service/ServicesSection'
import TestimonialSection from '../service/TestimonialSection'
import GoodnessSection from '../service/GoodnessSection'

function Service() {
  return (
    <div>
        <SectionProps 
      img={"src/assets/service-props-back.png"} 
      subText = "Services"
        heroHeader = "Our Logistics Service"
        
      />
        <ServicesSection />
        <GoodnessSection />
        <TestimonialSection />
    </div>
  )
}

export default Service