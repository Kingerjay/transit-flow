import React from 'react'

function PricingSection() {
  return (
    <div className='pricing-section'>

        {/* Pricing Container */}
        <div className="pricing-con">

            {/* Pricing Header */}
            <div className="pricing-header">
                <p className='pricing-subtext'>Pricing</p>
                <p className='pricing-head'>Our Best Pricing</p>
            </div>
            {/* End of Pricing Header */}

            {/* Pricing Flex */}
            <div className="pricing-flex">

                {/* Flex 1 */}
                <div className="pricing-flex1">

                    {/* header */}
                    <div className="pricing-flex1-head">
                        <p className='pricing-text1'>Basic</p>
                        <p className='pricing-text2'>$39<span class='month'>/ month</span></p>
                    </div>
                    {/* header */}

                    {/* Pricing list */}
                    <ul className='pricing-list'>
                        <li>Single Truck</li>
                        <li>Full Insurance</li>
                        <li>500 Km</li>
                        <li className='border-bottom'>Real-time rate shopping</li>
                    </ul>
                    {/* End of Pricing list */}

                    {/* Pricing Button */}
                    <div className="pricing-button">
                        <button>Choose Plan</button>
                    </div>
                    {/* Pricing Button */}

                </div>
                {/* End of Flex 1 */}


                {/* Flex 2 */}
                <div className="pricing-flex2">

                    {/* header */}
                    <div className="pricing-flex1-head">
                        <p className='pricing-text3'>Standard</p>
                        <p className='pricing-text4'>$59<span class='month'>/ month</span></p>
                    </div>
                    {/* header */}

                    {/* Pricing list */}
                    <ul className='pricing-list2'>
                        <li>Single Truck</li>
                        <li>Full Insurance</li>
                        <li>500 Km</li>
                        <li className='border-bottom2'>Real-time rate shopping</li>
                    </ul>
                    {/* End of Pricing list */}

                    {/* Pricing Button */}
                    <div className="pricing-button2">
                        <button>Choose Plan</button>
                    </div>
                    {/* Pricing Button */}

                </div>
                {/* End of Flex 2 */}


                {/* Flex 3 */}
                <div className="pricing-flex1">

                    {/* header */}
                    <div className="pricing-flex1-head">
                        <p className='pricing-text1'>Premium</p>
                        <p className='pricing-text2'>$89<span class='month'>/ month</span></p>
                    </div>
                    {/* header */}

                    {/* Pricing list */}
                    <ul className='pricing-list'>
                        <li>Double Truck</li>
                        <li>Full Insurance</li>
                        <li>Unlimitted</li>
                        <li className='border-bottom'>Real-time rate shopping</li>
                    </ul>
                    {/* End of Pricing list */}

                    {/* Pricing Button */}
                    <div className="pricing-button">
                        <button>Choose Plan</button>
                    </div>
                    {/* Pricing Button */}

                </div>
                {/* End of Flex 3 */}

            </div>
            {/* End of Pricing Flex */}

        </div>
        {/* End of Pricing Container */}

    </div>
  )
}

export default PricingSection