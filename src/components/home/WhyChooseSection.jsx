import React from 'react'
import moveProduct from '/src/assets/move-product-icon.png'
import grid1 from '/src/assets/why-grid1.svg'
import grid2 from '/src/assets/why-grid2.svg'
import grid3 from '/src/assets/why-grid3.svg'
import grid4 from '/src/assets/why-grid4.svg'
import grid5 from '/src/assets/why-grid5.svg'
import grid6 from '/src/assets/why-grid6.svg'

function WhyChooseSection() {
  return (
    <div className='why-choose-section'>

        {/* Why choose Flex */}
        <div className="why-choose-flex">

            {/* Flex 1 */}
            <div className="why-choose-flex1">
                
                {/* Background image */}
                <div className="why-choose-img">

                    {/* Moving Product */}
                    <div className="moving-product">
                        <img src={moveProduct} alt="" />
                        <p>Moving your products across borders</p>
                    </div>
                    {/* End of Moving Product */}

                </div>
            </div>
            {/* End of Flex1 */}

            {/* Flex 2 */}
            <div className="why-choose-flex2">
                <p className='why-choose-subtext'>Why Choose</p>
                <p className='why-choose-header'>We create opportunity to reach potential</p>
                <p className='why-choose-text'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>

                {/* Why Choose Grid */}
                <div className="why-choose-grid">

                    {/* Grid 1 */}
                    <div className="why-choose-grid1">
                        <img src={grid1} alt="" />
                        <p>Safe Package</p>
                    </div>
                    {/* End of Grid 1 */}

                    {/* Grid 2 */}
                    <div className="why-choose-grid1">
                        <img src={grid2} alt="" />
                        <p>Ship Everyware</p>
                    </div>
                    {/* End of Grid 2 */}

                    {/* Grid 3 */}
                    <div className="why-choose-grid1">
                        <img src={grid3} alt="" />
                        <p>Global Tracking</p>
                    </div>
                    {/* End of Grid 3 */}

                    {/* Grid 4 */}
                    <div className="why-choose-grid1">
                        <img src={grid4} alt="" />
                        <p>24/7 Support</p>
                    </div>
                    {/* End of Grid 4 */}

                    {/* Grid 5 */}
                    <div className="why-choose-grid1">
                        <img src={grid5} alt="" />
                        <p>In Time Delivery</p>
                    </div>
                    {/* End of Grid 5 */}

                    {/* Grid 6 */}
                    <div className="why-choose-grid1">
                        <img src={grid6} alt="" />
                        <p>Transparant Pricing</p>
                    </div>
                    {/* End of Grid 6 */}

                </div>
                {/* End of Why Choose Grid */}

            </div>
            {/* End of Flex2 */}

        </div>
         {/* End of Why choose Flex */}

    </div>
  )
}

export default WhyChooseSection