import React from 'react'
import img1 from '/src/assets/about-us-img.png'
import img2 from '/src/assets/about-us-img2.png'

function AboutSectionOne() {
  return (
    <div className='about-us-section'>

      {/* About Flex */}
      <div className="about-us-flex">

        {/* Flex 1 */}
        <div className="about-us-flex1">
          <img src={img1} alt="" />
          <img src={img2} alt="" className='about-us-img2'/>
        </div>
        {/* End of Flex 1 */}

        {/* Flex 2 */}
        <div className="about-us-flex2">
          <p className='about-us-subtext'>About Us</p>
          <p className='about-us-header'>Our Company Overview</p>
          <p className='about-us-text'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>

          {/* Our Approach */}
          <div className="our-approach">
            <p className='approach1'>Our Approach</p>
            <p className='approach2'>Our Approach</p>
            <p className='approach2'>Our Approach</p>
          </div>
          {/* ENd of Our Approach */}

          <p className='about-us-text'>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
          </p>

          <button>Learn More</button>

        </div>
        {/* End of Flex 2 */}



      </div>
      {/* End of About Flex */}

    </div>
  )
}

export default AboutSectionOne