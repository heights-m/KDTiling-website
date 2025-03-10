import './navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm p-0">
        <div className="navbody container-fluid align-items-center justify-content-center">
            <Link to='/'>
                <img src="https://github.com/heights-m/KDTiling-website/blob/main/src/assets/KD_logo-full.jpg?raw=true" alt="Homepage button" className="home-logo ms-3"/>
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
                        <img src="https://raw.githubusercontent.com/heights-m/KDTiling-website/31e99ab964a7ccf8cd4db4011a4e6eb5cd9ef059/src/assets/close_24dp_00000_FILL0_wght400_GRAD0_opsz24.svg" alt="close navbar button" className=''/>
                    </div>
                </button>
                <ul className="navbar-nav flex align-items-center">
                    <li className="nav-item">
                        <NavLink to='/' className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/about' className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}> ABOUT</NavLink>
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
                    <li className="nav-item">
                        <NavLink to='/projects' className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>PROJECTS</NavLink>
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