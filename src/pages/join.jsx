
import { Footer, Navbar } from '@/components/common'
import React from 'react'

const join = () => {
  return (
    <div>
        <Navbar />
        <div className='container text-black mt-md-4 mb-4'>
         <div className="row">
            <div className='col-md-11 mx-auto'>
                <div className='row'>
                  <div className='col-md-6'>
                      <div className="pt-md-5 mt-4">
                          <h1 className='fs-xxxlarge line-height text-color mb-4 mt-5 pt-md-5'>Join Our Team</h1>
                          <p className='pt-3 fs-normal'>Looking for cleaning jobs in Birmingham? Join the Steelgrey team for competitive rates and an excellent working environment.</p>
                      </div>
                  </div>

                  <div className='col-md-6'>
                    <div className="pt-5 mt-4">
                      <div class="carousel-item active">
                           <img src="../../../assets/clean2.jpg" class="d-block w-100 h-100" alt="..."/>
                        </div>
                    </div>
                  </div>                 
                </div>
            </div>
         </div>
        </div>

        <div className="container p-md-5 mt-5">
            <div className="row mb-5">
                <div className="col-md-6">
                     <div className="card border-0">
                         <img src="../../../../assets/clean7.jpg" alt="..." className=''/>
                    </div>
                </div>
                <div className="col-md-6 mb-4 ">
                    <div className=" mt-3 ">
                          <h1 className='fs-xxlarge line-height text-color mb-4'>Benefits of working with Steelgrey</h1>
                          <p className='pt-3 fs-normal text-black fs-large '>At Steelgrey, we strive for excellence in everything we do. Whether we are working with a domestic client or a large corporation, we are committed to providing the highest quality cleaning services. If you are an individual with cleaning experience, have a professional attitude and a dedication to doing the best job possible, you’ll love working at Steelgrey.</p>
                      </div>
                </div>
            </div>

            <div className="row mt-md-5">
                <div className="col-md-6 mt-md-3">
                    <div className=" mt-md-3 ">
                          <p className='pt-3 fs-normal text-black fs-large '>We have a range of positions available at competitive rates. There are progression opportunities for our team members to build a rewarding career with us at Steelgrey too. We currently have full-time, part-time and apprentice jobs open, so please contact us for more information.</p>
                          <p className='pt-3 fs-normal text-black fs-large '>We think Steelgrey is one of the best cleaning companies to work for. If you are looking for cleaning jobs in Birmingham and the surrounding areas, we would love to have you join our team.</p>
                      </div>
                </div>
                <div className="col-md-6">
                     <div className="card border-0">
                         <img src="../../../../assets/clean3.png" alt="..." className=''/>
                    </div>
                </div>

            </div>

        </div>

        <section className='happy-customer-section p-md-5 mt-3 pb-5'>
        <div className='container text-black'>
          <div className='row'>
            <div className='col-md-10 mx-auto'>
            <h1 className='mt-5 pt-4 mb-4 text-center fs-xxxlarge text-color'>Messages from the team</h1>
              <div className="row">
                <div className='col-md-12 mx-auto'>
                  <div>
                      <div className='fs-normal text-center '><q className=''>We started Steelgrey to provide the highest quality Birmingham cleaning services to our clients. We could not do that without our dedicated and professional team of staff members.
                        <div className="mt-2">
                        <br className='' />
                        </div>
                      From competitive rates to flexible working patterns, we aim to make Steelgrey a wonderful place to work for all our staff. As a fast growing Company, we are always looking for enthusiastic new team members, so please get in touch with us to find out about our latest opportunities. </q></div>
                  </div>
                  <div className="text-center ">
                    <img src="../../../assets/icons/user.png" alt="Male avatar" className='mt-2' style={{width: "3.5rem"}}/>
                  </div>
                  <div>
                      <h6 className='text-color text-center my-4'>Tom Greenslade, Director</h6>
                  </div>
                </div>
          
              </div>
            </div>
          </div>
        </div>
        </section>

        <Footer />
    </div>
  )
}

export default join