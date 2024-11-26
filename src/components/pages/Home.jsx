import React from 'react'
import Homepage from '../home/homepage'
import ServicesSection from '../home/ServicesSection'
import SectionProps from '../SectionProps'
import WhyUsSection from '../home/WhyUsSection'
import ProjectSection from '../home/ProjectSection'
import TestimonialSection from '../home/TestimonialSection'
import WhyChooseSection from '../home/WhyChooseSection'
import TeamSection from '../home/TeamSection'
import ContactSection from '../home/ContactSection'
import BlogSection from '../home/BlogSection'

function Home() {
  return (
    <div>
        <SectionProps 
        img={"src/assets/background-img.png"} 
        subText = "Logistics & Supply Chain Solutions"
        heroHeader = "Your Gateway to any Destination in the World"
        heroText = "In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. "
        heroBtnImg = {"/src/assets/hero-button.png"}
        heroButton = "Explore More"
        />
        <ServicesSection />
        <WhyUsSection />
        <ProjectSection />
        <TestimonialSection />
        <WhyChooseSection />
        <TeamSection />
        <ContactSection />
        <BlogSection />
    </div>
  )
}

export default Home