import React from 'react'

const Navbar = () => {
  return (
    <div className='container '>
     <nav class="navbar navbar-expand-lg pt-4">
     <div class="container-fluid">
    <a class="navbar-brand fs-2 text-white" href="#">Grey Cleaning</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-6 fw-medium ">
        <li class="nav-item mx-2 ">
          <a class="nav-link text-white active" aria-current="page" href="#">Services</a>
        </li>
        <li class="nav-item mx-2 ">
          <a class="nav-link text-white" href="#">Reviews</a>
        </li>
        <li class="nav-item mx-2 ">
          <a class="nav-link text-white" href="#">Join Our Team</a>
        </li>
        <li class="nav-item mx-2 ">
          <a class="nav-link text-white " href="#">News</a>
        </li>
      </ul>
         <button class="btn bg-color text-white fw-medium py-2 px-4" type="submit">Get Started</button>
     </div>
     </div>
    </nav>
    </div>
  )
}

export default Navbar