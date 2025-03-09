import { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom';

function Home() {

  const imgSlideArray = ['https://github.com/heights-m/KDTiling-website/blob/main/src/assets/IMG_3740.JPG?raw=true', 'https://github.com/heights-m/KDTiling-website/blob/main/src/assets/IMG_20210503_124244%20(1).jpg?raw=true', 'https://github.com/heights-m/KDTiling-website/blob/main/src/assets/Temp_1696741958464.jpg?raw=true'];
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

          <div className='vsplit-txt bottom-0 start-50 translate-middle-x'>
            <div className='whitebox'>
              <h2 className='f-tomorrow mb-4 mt-3'>Professional Tiling Service</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut id, iure harum aliquid officiis sunt alias distinctio dicta fugit facere, in similique eligendi itaque porro eius libero quaerat deleniti! Quae!</p>
            </div>
          </div>          
          <img className='vsplit-img' src={imgSlideArray[imgSlideIndex]} alt="" />
         
        </div> 
        <div className='whitebox large-hide'>
          <h2 className='f-tomorrow mb-4 mt-3'>Professional Tiling Service</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut id, iure harum aliquid officiis sunt alias distinctio dicta fugit facere, in similique eligendi itaque porro eius libero quaerat deleniti! Quae!</p>
        </div>

        <div id="bold-ad-div">
          <h1 className="f-kdam" id='bold-ad'>
            AT KD TILING, OUR CUSTOMER'S SATISFACTION IS OUR PRIORITY
          </h1>
        </div>

        <div className='services h-auto'>
          <h2 className='f-tomorrow mt-5 ms-5'>OUR SERVICES</h2>
          <div className="d-flex services-container justify-content-center container-fluid flex-wrap">
            <Link className='services-card' to='/'>
                <div className="serv-card-img-container">
                  <img className='serv-card-img' src={imgSlideArray[0]} alt="" />
                </div>
                <h3>Bathroom Tiling</h3>
            </Link>
            <div className="services-card">
              <div className="serv-card-img-container">
                <img className='serv-card-img' src={imgSlideArray[0]} alt="" />
              </div>
              <h3>Commercial Tiling</h3>
            </div>
            <div className="services-card">
              <div className="serv-card-img-container">
                <img className='serv-card-img' src={imgSlideArray[0]} alt="" />
              </div>
              <h3>Residential Tiling</h3>
            </div>
            <div className="services-card">
              <div className="serv-card-img-container">
                <img className='serv-card-img' src={imgSlideArray[0]} alt="" />
              </div>
              <h3>Tiling Renovation</h3>
            </div>
            <div className="services-card">
              <div className="serv-card-img-container">
                <img className='serv-card-img' src={imgSlideArray[0]} alt="" />
              </div>
              <h3>Wall and Floor Tiling</h3>
            </div>
          </div>
          
        </div>
        
        <div id="promo-container">
          <div id="promo-head">
            <h1 className='f-kdam'> CENTRAL COAST AREA'S EXPERIENCED INDUSTRY PROFESSIONALS</h1>
          </div>
          <div className="promo-card">
            <img className='three-sq' src="https://github.com/heights-m/KDTiling-website/blob/main/src/assets/three_square.png?raw=true" alt="" />
            <div className='promo-c-text'>
              <h2 className="f-tomorrow promo-c-title">OUR GUARANTEE</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sunt dignissimos, eos suscipit non ipsam recusandae nesciunt, nam minima deleniti quisquam quia iste? Esse, quas. Laborum eveniet libero dicta ipsam?</p>
            </div>
          </div>
          <div className="promo-card-r">
            <div className='promo-c-text'>
              <h2 className="f-tomorrow promo-c-title">OVER 17 YEARS OF SERVICE</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sunt dignissimos, eos suscipit non ipsam recusandae nesciunt, nam minima deleniti quisquam quia iste? Esse, quas. Laborum eveniet libero dicta ipsam?</p>
            </div>
            <img className='three-sq' src="https://github.com/heights-m/KDTiling-website/blob/main/src/assets/three_square.png?raw=true" alt="" />
            </div>
          <div className="promo-card">
            <img className='three-sq' src="https://github.com/heights-m/KDTiling-website/blob/main/src/assets/three_square.png?raw=true" alt="" />
            <div className='promo-c-text'>
              <h2 className="f-tomorrow promo-c-title">WHAT SETS US APART</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sunt dignissimos, eos suscipit non ipsam recusandae nesciunt, nam minima deleniti quisquam quia iste? Esse, quas. Laborum eveniet libero dicta ipsam?</p>
            </div>
          </div>
        </div>

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