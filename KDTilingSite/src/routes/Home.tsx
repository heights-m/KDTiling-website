import React, { useState } from 'react'
import './home.css'

function Home() {

  const imgSlideArray = ['/src/assets/IMG_3740.JPG', '/src/assets/IMG_20210503_124244 (1).jpg', '/src/assets/Temp_1696741958464.jpg'];
  const [imgSlideIndex, setImgSlideIndex] = useState(0);
  const imgArrLimit = 2;

  const slideImgNext = () => {
    if (imgSlideIndex == imgArrLimit) {
      setImgSlideIndex(0);
    } else {
      setImgSlideIndex(imgSlideIndex + 1);
    }
  }

  const slideImgPrev = () => {
    if (imgSlideIndex == 0) {
      setImgSlideIndex(imgArrLimit);
    } else {
      setImgSlideIndex(imgSlideIndex - 1);
    }
  }

  return (
    <div>
        <div className='img-container'>
          <svg onClick={slideImgPrev} className='img-back-arrow' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
          <svg onClick={slideImgNext} className='img-next-arrow' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>

          <div className='vsplit-txt top-50 start-50 translate-middle'>
            <div>
              <h2 className='f-tomorrow mb-4'>Professional Tiling Service</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut id, iure harum aliquid officiis sunt alias distinctio dicta fugit facere, in similique eligendi itaque porro eius libero quaerat deleniti! Quae!</p>
            </div>
          </div>          
          <img className='vsplit-img' src={imgSlideArray[imgSlideIndex]} alt="" />
        </div>

        <div className='services'>
          <h2 className='f-tomorrow mt-4 bold'>OUR SERVICES</h2>
        </div>
        <hr />

        <h2 className='mt-4'>About</h2>
        <div className='services'></div>
        <hr />

        
        <h2 className='mt-4'>Gallery</h2>
        <div className='services'></div>
        <hr />

    </div>
  )
}

export default Home