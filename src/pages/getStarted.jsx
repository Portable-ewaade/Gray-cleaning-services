
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
                      <div className="pt-5 mt-4 mx-3">
                          <h1 className='fs-xxxlarge line-height text-color mb-4 pt-md-5'>Get Started</h1>
                          <p className='pt-3 fs-normal'>Ready to talk to us about your cleaning requirements? Get in touch with our friendly cleaning team today to get the process started.</p>

                          <p className='pt-3 fs-normal'>Hiring a cleaner doesn’t need to be difficult. Complete the form below to book in your free consultation. We’ll visit your property, discuss your requirements and provide you with a no-obligation quote. Then, all that’s left to do is decide on a date and time that suits you.</p>
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

       <div className="container text-black pt-md-2 mt-4">
        <div className="row">
            <div className="col-md-6">
            <h3>Get In Touch</h3>
              <p>steelgreycleaningservice </p>
              <p>We clean, you relax</p>
              <p>Location: Lagos and Abuja.</p>
            </div>
            {/* <hr /> */}
            <div className="col-md-6">
            <h5>Contacts:</h5>
              <h6><a href="tel:0792 322 0814">
              Doris: 09035169253 (Lagos) </a></h6>
              <h6> <a href="tel:+234809765923">Fechi: +234809765923 (Abuja) </a></h6>
              <h6><a href="https://wa.me/message/4N35|VIHDMV7A1">WhatsApp: https://wa.me/message/4N35|VIHDMV7A1 </a></h6>

            </div>
        </div>
          

          

       </div>
        <Footer />
    </div>
  )
}

export default getStarted