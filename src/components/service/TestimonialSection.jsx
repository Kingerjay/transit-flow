import React from 'react'
import icon1 from '/src/assets/testimony-arrow1.svg'
import icon2 from '/src/assets/testimony-arrow2.svg'
import user1 from '/src/assets/user1.png'
import user2 from '/src/assets/user2.png'
import quote from '/src/assets/quote-icon.svg'
import star from '/src/assets/star-icon.svg'

function TestimonialSection() {
  return (
    <div className='testimonial-section'>
        
        {/* <!-- Testimonial section --> */}
      <div className="test-section">

        {/* <!-- Testimonial text 1 --> */}
        <p className="test-text1">Testimonial</p>
        {/* <!-- Testimonial text 1 --> */}

        {/* <!-- Testimonial Heading and arrows--> */}
        <div className="head-icons">

          {/* <!-- testimonial heading --> */}
          <p className="test-head">What Our Customer Say</p>
          {/* <!-- end of testimonial heading --> */}

          {/* <!-- testimonial arrows --> */}
          <div className="test-arrows">
            {/* <!-- arrow 1 --> */}
            <div className="arrow1">
              <img src={icon1} alt="" />
            </div>

            {/* <!-- arrow 2 --> */}
            <div className="arrow2">
              <img src={icon2} alt="" />
            </div>
          </div>
          {/* <!-- end of testimonial arrows --> */}
        </div>
        {/* <!-- end of Testimonial Heading and arrows --> */}

        {/* <!-- testimony review section --> */}
        <div className="testimony">
          {/* <!-- testimony 1 --> */}
          <div className="testimony1">

            {/* <!-- review heading and icon --> */}
            <div className="review-head-icon">

              {/* <!-- review head --> */}
              <div className="review-head">

                {/* <!-- review head image --> */}
                <div className="review-img">
                  <img src={user1} alt="" />
                </div>
                {/* <!-- end of review head image --> */}

                <div className="review-head-text">
                  {/* <!-- review head text --> */}
                  <p className="review-head-text1">Kathleen Smith</p>
                  <p className="review-head-text2">Fuel Company</p>
                </div>
              </div>
              {/* <!-- end of review head --> */}

              {/* <!-- review icon --> */}
              <div className="review-icon">
                <img src={quote} alt="" />
              </div>
              {/* <!-- end of review icon --> */}
            </div>
            {/* <!-- end of review heading and icon --> */}

            {/* <!-- review text --> */}
            <p className="review-text">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>

            {/* <!-- review star --> */}
            <div className="review-star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            {/* <!-- end of review star --> */}
          </div>
          {/* <!-- end of testimony 1 --> */}

          {/* <!-- testimony 2 --> */}
          <div className="testimony2">
            {/* <!-- review heading and icon --> */}
            <div className="review-head-icon">
              {/* <!-- review head --> */}
              <div className="review-head">
                {/* <!-- review head image --> */}
                <div className="review-img">
                <img src={user2} alt="" />
                </div>
                {/* <!-- end of review head image --> */}

                <div className="review-head-text">
                  {/* <!-- review head text --> */}
                  <p className="review-head-text3">John Martin</p>
                  <p className="review-head-text4">Restoration Company</p>
                </div>
              </div>
              {/* <!-- end of review head --> */}

              {/* <!-- review icon --> */}
              <div className="review-icon">
                <img src={quote} alt="" />
              </div>
              {/* <!-- end of review icon --> */}
            </div>
            {/* <!-- end of review heading and icon --> */}

            {/* <!-- review text --> */}
            <p className="review-text1">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>

            {/* <!-- review star --> */}
            <div className="review-star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            {/* <!-- end of review star --> */}
          </div>
          {/* <!-- end of testimony 2 --> */}
        </div>
        {/* <!-- testimony review section --> */}
      </div>
      {/* <!-- end of Testimonial section --> */}

    </div>
  )
}

export default TestimonialSection