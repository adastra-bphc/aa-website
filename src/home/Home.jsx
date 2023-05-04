import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import requests from './request';
import './Home.css'
import aaron from './stargazing.jpg'
import chi from './zathura.jpg'
import cri from './exoplanet.jpg'

function Home() {
    let column = {
        float: "left",
        width: "30%",
        marginLeft: "2vw",
        marginBottom: "5vw",
    }

    let imgstyle = {
        width: "80%",
        margin: " 0 auto",
    }

    let text = {
        wordWrap: "break-word",
    }

    let marginstyle = {
        marginLeft: "4vw",
    }

    return (
        <div>
            <div class="container-fluid my-5">
                <div class="row">
                    <div class="column" style={column}>
                        <div class="card bg-dark text-white" style={imgstyle}>
                            <img src={aaron} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">STARGAZING</h5>
                                <p class="card-text">For the Love of Astronomy\n</p>
                                <a href="#" class="btn btn-dark text-white">Go</a>
                            </div>
                        </div>
                    </div>
                    <div class="column" style={column}>
                        <div class="card bg-dark text-white" style={imgstyle}>
                            <img src={chi} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">ZATHURA</h5>
                                <p class="card-text">A Space Adventure</p>
                                <a href="#" class="btn btn-dark text-while">Go</a>
                            </div>
                        </div>
                    </div>
                    <div class="column" style={column}>
                        <div class="card bg-dark text-white" style={imgstyle}>
                            <img src={cri} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">EXOPLANET WORKSHOP</h5>
                                <p class="card-text">Finding, Classifying & Analysing Exoplanets using AI/ML</p>
                                <a href="#" class="btn btn-dark text-whit">Go</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-11" style={marginstyle}>
                    <div class="text" style={text}>
                        AD ASTRA <br /> <br /> AD ASTRA
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="column" style={column}>
                        <div class="card bg-dark text-white" style={imgstyle}>
                            <img src={aaron} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">BLOG1</h5>
                                <p class="card-text">........................</p>
                                <a href="#" class="btn btn-dark text-white">Go</a>
                            </div>
                        </div>
                    </div>
                    <div class="column" style={column}>
                        <div class="card bg-dark text-white" style={imgstyle}>
                            <img src={chi} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">BLOG2</h5>
                                <p class="card-text">..............</p>
                                <a href="#" class="btn btn-dark text-while">Go</a>
                            </div>
                        </div>
                    </div>
                    <div class="column" style={column}>
                        <div class="card bg-dark text-white" style={imgstyle}>
                            <img src={cri} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">BLOG3</h5>
                                <p class="card-text">...................</p>
                                <a href="#" class="btn btn-dark text-whit">Go</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;