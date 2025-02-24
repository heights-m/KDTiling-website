import React from 'react'
import './home.css'

function Home() {
  return (
    <div>
        <div className="vsplit-box d-flex">
            <div className='img-container w-50'>
            <svg className='img-back-arrow' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#00000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
            <svg className='img-next-arrow' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#00000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
            </div>
            <div className='vsplit-txt w-50'> Example text </div>
        </div>

        <h2 className='mt-4'>Services</h2>
        <div className='services'></div>
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