import React from 'react'
import OurMission from './OurMission'
import Navbar from '../../components/Navbar'
import Enquires from './Enquires'
import Services from './Services'
import Work from './Work'
import Pricing from './Pricing'
import Credibility from './Credibility'
import Booking from './Booking'

const Home = () => {
  return (
    <>
      <section
      className='hero-page '
      style={{
        backgroundImage: "url('../../../../assets/Frame.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Navbar />
      <div className='container text-black mt-5'>
         <div className="row">
            <div className='col-md-10 mx-auto'>
                <div className='row'>
                  {/* show on mobile */}
                <div className='col-md-6 ui-show-only ui-hide-big'>
                    <div className="pt-5 mt-4">
                      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../../../assets/cln5.jpg" class="d-block w-100 h-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="../../../assets/cln6.jpg" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="../../../assets/cleaning2.jpeg" class="d-block w-100" alt="..."/>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                      </div>
                    </div>

                  <div className='col-md-6 ui-hide-only'>
                      <div className="pt-5 mt-4">
                          <h1 className='fs-xxxlarge line-height text-color mb-4'>Professional <br /> cleaning <br /> service</h1>
                          <p className='pt-3 fs-normal'>Cleanse Cleaning Specialists are on a mission to provide first class cleaning services and customer care, putting the customers needs at the forefront of all we do.</p>

                          <div className="fw-bold fs-xlarge text-color mt-5">
                            <a href="">Get Started</a>
                          </div>
                      </div>
                  </div>
                    {/* carousel */}
                    <div className='col-md-6 ui-hide-only'>
                    <div className="pt-5 mt-4">
                      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../../../assets/cln5.jpg" class="d-block w-100 h-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="../../../assets/cln6.jpg" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="../../../assets/cleaning2.jpeg" class="d-block w-100" alt="..."/>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                      </div>
                    </div>
                    {/* showon mbile */}
                    <div className='col-md-6 ui-show-only ui-hide-big'>
                      <div className="pt-2 mt-2">
                          <h1 className='fs-xxlarge line-height text-color mb-4'>Professional cleaning <br /> service</h1>
                          <p className='pt-3 fs-normal'>Cleanse Cleaning Specialists are on a mission to provide first class cleaning services and customer care, putting the customers needs at the forefront of all we do.</p>

                          <div className="fw-bold fs-xlarge text-color mt-5">
                            <a href="">Get Started</a>
                          </div>
                      </div>
                  </div>
                    
                </div>
            </div>
  
         </div>
    </div>
    </section>

    <OurMission />
    <Enquires />
    <Services />
    <Work />
    <Pricing />
    <Credibility />
    <Booking />

    </>
    
  )
}

export default Home