import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import logo from './AdAstra.png'

export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark bg-body-tertiary text-white">
            <div class="container-fluid">
                <img src={logo} alt="..." class="listimg-item" />
                <button class="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-white" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item list-item">
                            <Link to="/" class="nav-link active text-white" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item list-item">
                            <Link to="/about-us" class="nav-link active text-white">About Us</Link>
                        </li>
                        <li class="nav-item list-item">
                            <Link to="/blogs" class="nav-link active text-white">Blogs</Link>
                        </li>
                        {/* <li class="nav-item list-item">
          <a class="nav-link active text-white" href="#">Photography</a>
        </li>
        <li class="nav-item list-item">
          <a class="nav-link active text-white" href="#">Spaced Out</a>
        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
