import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import logo from './AdAstra.png'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary text-white">
            <div className="container-fluid">
                <img src={logo} alt="..." className="listimg-item" />
                <button className="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item list-item">
                            <Link to="/" className="nav-link active text-white" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item list-item">
                            <Link to="/about-us" className="nav-link active text-white">About Us</Link>
                        </li>
                        <li className="nav-item list-item">
                            <Link to="/blogs" className="nav-link active text-white">Blogs</Link>
                        </li>
                        <li className="nav-item list-item">
                            <a className="nav-link active text-white" href="#">Astrophotography</a>
                        </li>
                        <li className="nav-item list-item">
                            <a className="nav-link active text-white" href="#">Spaced Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
