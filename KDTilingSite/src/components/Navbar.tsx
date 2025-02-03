import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar-expand-sm mb-4">
        <div className="navbody container-fluid align-items-center">
            <img src="/src/assets/home.svg" alt="Homepage button" className="ms-3"/>
            <button
                className="navbar-toggler position-absolute end-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center"  id="navbarSupportedContent">
                <ul className="navbar-nav flex align-items-center">
                    <li className="nav-item m-2">
                        <a href="#">HOME</a>
                    </li>
                    <li className="nav-item m-2">
                        <a href="#">ABOUT</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item m-2">
                        QUOTE
                    </li>
                    <li className="nav-item m-2">
                        CONTACT
                    </li>
                </ul>
            </div>
        </div>
      </nav>
  )
}

export default Navbar