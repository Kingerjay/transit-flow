import React from 'react'
import img1 from '/src/assets/good-img1.png'
import img2 from '/src/assets/good-img2.png'
import icon1 from '/src/assets/good-icon1.svg'
import icon2 from '/src/assets/good-icon2.svg'
import icon3 from '/src/assets/good-icon3.svg'

function GoodnessSection() {
  return (
    <div className='good-section'>

        {/* Good Header */}
        <div className="good-header">
            <p className='good-subtext'>Our Goodness</p>
            <p className='good-head'>How We Works</p>
        </div>
        {/* ENd of Good Header */}

        {/* Good Flex */}
        <div className="good-flex">

            {/* flex 1 */}
            <div className="good-flex1">
                <img src={img1} alt="" />
                <img src={img2} alt="" className='good-img2'/>
            </div>
            {/* End of flex 1 */}

            {/* flex 2 */}
            <div className="good-flex2">

                {/* Good Warehouse */}
                <div className="good-content">
                    <img src={icon1} alt="" />

                    {/* Good Text */}
                    <div className='good-text'>
                    <p className="good-text1">Warehousing Services</p>
                    <p className="good-text2">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking </p>
                    </div>
                    {/* Good Text */}

                </div>
                {/* End of Good Warehouse */}

                {/* Good Safety */}
                <div className="good-content">
                    <img src={icon2} alt="" />

                    {/* Good Text */}
                    <div className='good-text'>
                    <p className="good-text1">Safety & Quality</p>
                    <p className="good-text2">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking </p>
                    </div>
                    {/* Good Text */}

                </div>
                {/* End of Good care */}

                {/* Good Warehouse */}
                <div className="good-content">
                    <img src={icon3} alt="" />

                    {/* Good Text */}
                    <div className='good-text'>
                    <p className="good-text1">Care for Environment</p>
                    <p className="good-text2">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking </p>
                    </div>
                    {/* Good Text */}

                </div>
                {/* End of Good care */}

            </div>
            {/* End of flex 2 */}

        </div>
        {/* End of Good Flex */}

    </div>
  )
}

export default GoodnessSection