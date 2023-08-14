
import { Footer, Navbar } from '@/components/common'
import { Booking } from '@/components/home'
import React from 'react'

const getStarted = () => {
  return (
    <div>
        <Navbar />
        <div className='container text-black mt-md-4 pb-5'>
         <div className="row">
            <div className='col-md-11 mx-auto'>
                <div className='row'>
                  <div className='col-md-6 '>
                      <div className="pt-5 mx-3">
                          <h1 className='fs-xxxlarge line-height text-color mb-4 pt-md-'>Your One-stop Click To A Seamless Cleaning Process.</h1>
                          <p className='pt-3 fs-normal'>Conveniently hire a cleaner and discuss your cleaning needs and specifications with us for free! We've got a team of expert cleaners ready to give you the best cleaning service.</p>
                          <p className='pt-3 fs-normal'>Reach out to us today and we can help you get started.</p>

                          <p className='pt-3 fs-normal'>Complete the form below to schedule your free consultation. We’ll visit your property, discuss your requirements and provide you with a no-obligation quote. Then, all that’s left to do is decide on a date and time that is most convenient for you.</p>
                      </div>
                  </div>

                  <div className='col-md-6'>
                    <div className="pt-5 mt-4">
                      <div class="carousel-item active">
                           <img src="../../../assets/enq.jpg" class="d-block w-100 h-100" alt="..."/>
                        </div>
                    </div>
                  </div>
                  
                </div>
            </div>
         </div>
        </div>

       <Booking />

       {/* <div className="container text-black pt-md-2 mt-4">
        <div className="row">
            <div className="col-md-6">
            <h3>Get In Touch</h3>
              <p>Steelgrey cleaning service </p>
              <p>We clean, you relax</p>
              <p>Location: Lagos and Abuja.</p>
            </div>
            <hr />
            <div className="col-md-6">
            <h5>Contacts:</h5>
              <h6><a href="tel: +2349035169253">
              Doris: +2349035169253 (Lagos) </a></h6>
              <h6> <a href="tel: +2348097659230">Fechi: +2348097659230 (Abuja) </a></h6>
              <h6><a href="https://wa.me/message/4N35|VIHDMV7A1">WhatsApp: https://wa.me/message/4N35|VIHDMV7A1 </a></h6>

            </div>
        </div>
          

          

       </div> */}
        <Footer />
    </div>
  )
}

export default getStarted