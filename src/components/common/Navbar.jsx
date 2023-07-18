import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='container '>
     <nav class="navbar navbar-expand-lg pt-4">
     <div class="container-fluid">
    <a class="navbar-brand fs-2 text-color" href="/"><b>Steelgrey-Cleaning</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-6 fw-medium ">
        <li class="nav-item mx-2 ">
          <Link href="/services" class="nav-link text-color active font-weight-600"> Services
          </Link>
        </li>
        <li class="nav-item mx-2 ">
          <Link href="/reviews" class="nav-link text-color active"> reviews
          </Link>
        </li>
        <li class="nav-item mx-2 ">
          <Link href="/join" class="nav-link text-color active">Join Our Team
          </Link>
        </li>
        <li class="nav-item mx-2 ">
          <a class="nav-link text-color " href="#">News</a>
        </li>
      </ul>
         <button class="btn text-white bg-color fw-medium py-2 px-4 shadow-lg" type="submit">
          <a href="/getStarted">Get Started</a>
         </button>
     </div>
     </div>
    </nav>
    </div>
  )
}

export default Navbar