import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm mb-4 p-0">
        <div className="navbody container-fluid align-items-center justify-content-center">
            <Link to='/'>
                <img src="/src/assets/KD_logo-full.jpg" alt="Homepage button" className="home-logo ms-3"/>
            </Link>
            <button
                className="navbar-toggler position-absolute end-0 me-3"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end navitems h-100" tabIndex={-1} id="navbarContent" aria-labelledby='navbarContentLabel'>
                <button
                    className="navbar-toggler w-100 mb-4"
                    id='navmenu_btn_self'
                    type="button"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close navigation"
                >
                    <div className="py-3">
                        <img src="\src\assets\close_24dp_00000_FILL0_wght400_GRAD0_opsz24.svg" alt="close navbar button" className=''/>
                    </div>
                </button>
                <ul className="navbar-nav flex align-items-center">
                    <li className="nav-item">
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about'> ABOUT</Link>
                    </li>
                    <li className="nav-item dropdown-center services-dd">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            SERVICES
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Bathroom Tiling</a></li>
                            <li><a className="dropdown-item" href="#">Commercial Tiling</a></li>
                            <li><a className="dropdown-item" href="#">Residential Tiling</a></li>
                            <li><a className="dropdown-item" href="#">Tiling Renovation</a></li>
                            <li><a className="dropdown-item" href="#">Wall And Floor Tiling</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">PROJECTS</li>
                    <li className="nav-item">
                        QUOTE
                    </li>
                    <li className="nav-item">
                        CONTACT
                    </li>
                </ul>
            </div>
        </div>
      </nav>
  )
}

export default Navbar