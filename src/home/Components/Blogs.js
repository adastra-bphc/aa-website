import React from 'react'

export default function Blogs() {

    let column={
        float: "left",
        width: "30%",
        marginLeft:"2vw",
        marginBottom:"5vw",
    }
    let imgstyle={
        width:"80%",
        margin:" 0 auto",
    }

  return (
   <div class="container-fluid">
    <div class="row">
      <div class="column" style = {column}>
        <div class="card bg-dark text-white" style={imgstyle}>
          <img src="aaron-burden-6jYoil2GhVk-unsplash.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">BLOG1</h5>
            <p class="card-text">........................</p>
            <a href="#" class="btn btn-dark text-white">Go</a>
          </div>
        </div>
      </div>
      <div class="column" style = {column}>
        <div class="card bg-dark text-white" style={imgstyle}>
          <img src="chirayu-trivedi-iDTDvSDEVjw-unsplash.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">BLOG2</h5>
            <p class="card-text">..............</p>
            <a href="#" class="btn btn-dark text-while">Go</a>
          </div>
        </div>
      </div>
      <div class="column" style = {column}>
        <div class="card bg-dark text-white" style={imgstyle}>
          <img src="chris-ried-ieic5Tq8YMk-unsplash.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">BLOG3</h5>
            <p class="card-text">...................</p>
            <a href="#" class="btn btn-dark text-whit">Go</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
