
import { Footer, Navbar } from '@/components/common'
import { Services } from '@/components/home'
import React from 'react'

const services = () => {
  return (
    <div>
        <Navbar />
        <div className='container text-black mt-md-4'>
         <div className="row">
            <div className='col-md-11 mx-auto'>
                <div className='row'>
                  <div className='col-md-6'>
                      <div className="pt-md-5 mt-4">
                          <h1 className='fs-xxxlarge line-height text-color mb-4 mt-5 pt-md-5'>Our Services</h1>
                          <p className='pt-3 fs-normal'>Customer service, reliability and unrivalled results are what sets our
                           cleaning company in Birmingham apart. Find out more about our cleaning 
                           services to discover how we can help you.</p>
                      </div>
                  </div>

                  <div className='col-md-6'>
                    <div className="pt-5 mt-4">
                      <div class="carousel-item active">
                           <img src="../../../assets/clean8.png" class="d-block" alt="..."/>
                        </div>
                    </div>
                  </div>
                  
                </div>
            </div>
         </div>
        </div>
        <Services />
        <div className="container text-black">
            <h6>Click here to   
              <a href="/getStarted">
              <span className='text-color'> Book A Cleaner Now</span>
              </a>
            </h6>
        </div>
        {/* <Facts /> */}
        <Footer />
    </div>
  )
}

export default services