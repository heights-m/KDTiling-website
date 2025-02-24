import React from 'react'
import './home.css'

function Home() {
  return (
    <div>
        <div className="vsplit-box d-flex">
            <div className='img-container w-50'></div>
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