import React from 'react'
import img1 from '/src/assets/blog-img1.png'
import img2 from '/src/assets/blog-img2.png'
import img3 from '/src/assets/blog-img3.png'
import footerImg from '/src/assets/footer-img.png'
import calendar from '/src/assets/calendar.svg'

function BlogSection() {
  return (
    <div className='blog-section'>

        {/* Blog Container */}
        <div className="blog-con">

            {/* Blog Header */}
            <div className="blog-header">
                <p className='blog-subtext'>Our Blog</p>
                <p className='blog-head'>Our Latest News</p>
            </div>
            {/* End of Blog Header */}

            {/* Blog Flex 1 */}
            <div className="blog-flex1">

                {/* Image */}
                <div className="blog-flex-image">
                    <img src={img1} alt="" />
                </div>

                {/* Date */}
                <div className="blog-date">
                    <img src={calendar} alt="" />
                    <p className='blog-date-text1'>08</p>
                    <p className='blog-date-text2'>September</p>
                </div>
                {/* ENd of Date */}

                {/* Blog Content */}
                <div className="blog-content">
                    <p className='blog-content-text1'>Inland freight a worthy solution for your business</p>
                    <p className='blog-content-text2'>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>

                    <ul>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                    </ul>
                </div>
                {/* End of Blog Content */}

            </div>
            {/* ENd of Blog Flex 1 */}


            {/* Blog Flex 2 */}
            <div className="blog-flex1">

                {/* Image */}
                <div className="blog-flex-image">
                    <img src={img2} alt="" />
                </div>

                {/* Date */}
                <div className="blog-date">
                    <img src={calendar} alt="" />
                    <p className='blog-date-text1'>12</p>
                    <p className='blog-date-text2'>September</p>
                </div>
                {/* ENd of Date */}

                {/* Blog Content */}
                <div className="blog-content">
                    <p className='blog-content-text3'>How technology can help redraw the supply chain map</p>
                    <p className='blog-content-text2'>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>

                    <ul>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                    </ul>
                </div>
                {/* End of Blog Content */}

            </div>
            {/* ENd of Blog Flex 2 */}


            {/* Blog Flex 3 */}
            <div className="blog-flex1 blog-flex2">

                {/* Image */}
                <div className="blog-flex-image">
                    <img src={img3} alt="" />
                </div>

                {/* Date */}
                <div className="blog-date">
                    <img src={calendar} alt="" />
                    <p className='blog-date-text1'>25</p>
                    <p className='blog-date-text2'>September</p>
                </div>
                {/* ENd of Date */}

                {/* Blog Content */}
                <div className="blog-content">
                    <p className='blog-content-text1'>Five things you should have ready for your broker</p>
                    <p className='blog-content-text2'>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>

                    <ul>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                        <li>Urgent transport solutions</li>
                        <li>Reliable & experienced staffs</li>
                    </ul>
                </div>
                {/* End of Blog Content */}

            </div>
            {/* ENd of Blog Flex 3 */}

            {/* Blog Button */}
            <div className="blog-button">
                <button>More Blog</button>
            </div>
            {/* End of Blog Button */}

        </div>
        {/* End of Blog Container */}

        {/* footer image */}
        <div className="footer-image">
            <img src={footerImg} alt="" />
        </div>
        {/* End of footer image */}

    </div>
  )
}

export default BlogSection