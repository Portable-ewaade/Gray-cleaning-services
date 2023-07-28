import React from 'react'

const Work = () => {
  return (
    <div>
        <div className="text-center mt-md-3 position-relative how-it-works">
            <img src="../../../assets/services.png" alt="..."className='mt-5' />
                    <div class="card text-bg-light ml-5 p-4  how-it-works2 border-0 position-absolute top-50 start-50">
                        <div class="card-body p-0 m-0">
                            <h1 className='fs-xxlarge text-color p-sm-5 p-3 m-0'>All Services
                            <a href="/services">
                                <img src="../../../assets/icons/arrow-right.png" alt="..." className='mx-2 arrrow-i'/>
                            </a>
                            </h1>
                        </div>
                    </div>
        </div>

        <div className="container ">
            <hr />
           <div className="">
                <h1 className='text-color my-5 fw-light fs-xxxlarge'>How it works</h1>
           </div>
           <div className="row ">
                <div className="col-md-4 border-0">
                    <div className="card border-0 ">
                        <div className="card-body shadow-lg p-4 mb-3">
                            <h1 className='text-color mt-2 mb-md-4'>1.</h1>
                            <h2 className='text-color my-md-5 my-sm-2'>Contact Us</h2>
                            <p className='mb-4'>Get in touch with our friendly Birmingham-based cleaning company about your requirements today. Whether you’re a homeowner, tenant, landlord or corporate client, we are ready to help.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 ">
                        <div className="card-body shadow-lg p-4 mb-3">
                            <h1 className='text-color mt-2 mb-md-5 my-sm-2'>2.</h1>
                            <h2 className='text-color mb-md-5 mb-sm-4'>Arrange A Consultation</h2>
                            <p>For all our cleaning services, we undertake a bespoke no obligation consultation to ensure our work is tailored to your needs down to the very last detail.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0">
                        <div className="card-body shadow-lg p-4">
                            <h1 className='text-color mt-2 mb-md-5 my-sm-2'>3.</h1>
                            <h2 className='text-color mb-3'>Get ready to cleanse</h2>
                            <p>Our experienced and dependable Birmingham cleaners will arrive on-time and complete your clean to the highest possible standard, leaving your property cleansed. Whether you choose a one-off clean or a regular service package, we are confident you will love our results.</p>
                        </div>
                    </div>
                </div>
                <div className="text-color d-flex justify-content-end my-4">
                    <h4 className='fw-normal'>Make an enquiry
                      <a href="/getStarted">
                        <img src="../../../assets/icons/arrow-right.png" alt="..." className='mx-2 arrrow-i'/>
                        </a>
                      </h4>
                </div>
           </div>
        </div>

    <section className='happy-customer-section'>
      <div className='container text-black'>
        <div className='row'>
          <div className='col-md-10 mx-auto'>
          <h1 className='mt-5 pt-4 mb-4 text-center fs-xxxlarge text-color'>Happy Customers, Happy Homes & Happy Businesses</h1>
            <div className="row">
              <div className='col-md-12 mx-auto'>
                <div>
                    <p className='fs-normal text-center '><q className=''>Tom and his team at Cleanse were recommended to us and I’m really glad they were. They have carried out excellent work with real attention to detail. All of our clients have been delighted with their work be it end of tenancy cleans, full sterilised cleans or usual home cleans. We will certainly continue to use Tom in the future as it is so important to have reliable contractors in our industry. Thanks for the great work!</q></p>
                </div>
                <div>
                    <h6 className='text-color text-center my-4'>James Managing Partner Rice Chamberlains Estate Agents</h6>
                </div>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </section> 
    </div>
  )
}

export default Work