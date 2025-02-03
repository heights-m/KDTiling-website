import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm mb-4 p-0">
        <div className="navbody container-fluid align-items-center justify-content-center">
            <Link to='/'>
                <img src="/src/assets/home.svg" alt="Homepage button" className="ms-3"/>
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
            <div className="offcanvas offcanvas-end navitems" tabIndex={-1} id="navbarContent" aria-labelledby='navbarContentLabel'>
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
                        <a href="#">HOME</a>
                    </li>
                    <li className="nav-item">
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