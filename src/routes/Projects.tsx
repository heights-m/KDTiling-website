import React from 'react'
import './projects.css'

function Projects() {
  return (
    <div>
        <div className="d-flex text-center justify-content-center align-items-center" id='proj-head'>
            <img className='three-sq t-left me-3' src="https://github.com/heights-m/KDTiling-website/blob/main/src/assets/three_square.png?raw=true" alt="" />
            <h1 className='f-tomorrow' id='title'>PROJECTS</h1>
            <img className='three-sq t-right ms-3' src="https://github.com/heights-m/KDTiling-website/blob/main/src/assets/three_square.png?raw=true" alt="" />
        </div>
    </div>
  )
}

export default Projects