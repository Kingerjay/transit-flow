import React from 'react'

function ProjectSection() {
  return (
    <div className='project-section'>

      {/* Project Container */}
      <div className="project-con">

        <p className='project-header'>Transporting Across The World</p>

        {/* Project grid */}
        <div className="project-grid">

          {/* Grid 1 */}
          <div className="project-grid1 project-grid-img">
            <p className='project-grid-text1'>Liquid Transportation</p>
            <p className='project-grid-text2'>Premium Tankers</p>
          </div>
          {/* End of Grid 1 */}

          {/* Grid 2 */}
          <div className="project-grid2 project-grid-img">
            <p className='project-grid-text1'>Packaging Solutions</p>
            <p className='project-grid-text2'>Warehouse Management</p>
          </div>
          {/* End of Grid 2 */}

          {/* Grid 3 */}
          <div className="project-grid3 project-grid-img">
            <p className='project-grid-text1'>Contract Logistics</p>
            <p className='project-grid-text2'>Road Transportation</p>
          </div>
          {/* End of Grid 3 */}

          {/* Grid 4 */}
          <div className="project-grid4 project-grid-img">
            <p className='project-grid-text1'>Warehouse & Distribution</p>
            <p className='project-grid-text2'>Large Warehouse</p>
          </div>
          {/* End of Grid 4 */}

          {/* Grid 5 */}
          <div className="project-grid5 project-grid-img">
            <p className='project-grid-text1'>Specialized Transport</p>
            <p className='project-grid-text2'>Ocean Transports</p>
          </div>
          {/* End of Grid 5 */}

        </div>
        {/* End of Project grid */}

        <div className="btn-con">
            <button className='project-btn'>More Work</button>
          </div>

      </div>
      {/* Project Container */}

      {/* Project background */}
      <div className="project-back"></div>
      {/* End of Project background */}

    </div>
  )
}

export default ProjectSection