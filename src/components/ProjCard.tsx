import React from 'react'

function ProjCard() {
  return (
    <div className='projcard'>
        <div className="projcard-img-cont">
            <img className='projcard-img' src="https://github.com/heights-m/KDTiling-website/blob/main/src/assets/IMG_3740.JPG?raw=true" alt="" />
        </div>
        <div className="projcard-foot d-flex">
            <div className="projcard-text">
                <p className="projcard-txt-t f-kdam">LOCATION - YEAR</p>
            </div>
            <div className="projcard-arrowbox d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#FFFFFF"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
            </div>
        </div>
    </div>
  )
}

export default ProjCard