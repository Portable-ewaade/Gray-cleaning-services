import React from 'react'

const Enquires = () => {
  return (
    <div className="mt-md-5">
        <div className='mt-5'>
        <div className="text-center mt-5 position-relative enquiries">
            <img src="../../../assets/inquiry.png" alt="..."className='mt-5 enq-img'  />

                    <div class="card text-bg-light ml-5 p-3 enquiry border-0 position-absolute top-50 start-50">
                        <div class="card-body p-0 m-0">
                            <h1 className='fs-medium text-color p-sm-5 p-3 m-0'>Still Got Questions? <br /> Schedule A Free Consultation Now 
                            <a href="/getStarted">
                                <img src="../../../assets/icons/arrow-right.png" alt="..." className='mx-2 arrrow-i'/>
                            </a>
                            </h1>
                        </div>
                    </div>
        </div>

            <section className='mission-section mt-2'>
        <div className='container text-black'>
            <div className='row'>
                <div className='col-md-10 mx-auto mt-md-4'>
                    <div className="row">
                    <div className='col-md-6 mt-5 p-2'>
                    <div class="card text-bg-light mb-3 border-0 what-else ">
                        <div class="card-body p-0 m-0">
                            <h1 className='fs-xxxlarge text-color p-sm-5 p-5 shadow-lg m-0'>What else does Steelgrey offer?</h1>
                        </div>
                    </div>
                     </div>
                     <div className='col-md-6 mt-5'>
                            <div>
                                <hr className='mb-4 '/>
                                <p className='fs-normal'>7 Days All-week service provision</p>
                                <hr className='mt-4 mb-4' />
                                <p className='fs-normal mb-4'>Accepts small, medium, and larger scale jobs.</p>  
                                <hr className='mt-4 mb-4' />
                                <p className='fs-normal '>All types of cleaning services.</p>  
                            </div>    
                        </div>
        
                        <hr />
                        <div className='col-md-6 mt-4'>
                            <div>
                                <p className='fs-normal'>Credible, experienced, and friendly cleaners</p>
                            </div>    
                        </div>
                        <hr className='d-md-none mt-4'/>
                        <div className='col-md-6 mt-4'>
                            <div>
                                <p className='fs-normal'>Flexible cleaning packages- One-off cleans, regular cleans, contract cleaning, and bespoke tailor-made just for you! </p>  
                            </div>    
                        </div>
                        <hr className='mt-3'/>
                        <div className='col-md-6 mt-4'>
                            <div>
                                <p className='fs-normal'>Free consultation on every job to assess your property or premises and your cleaning needs so we can provide you with a no-obligation quote</p>  
                            </div>    
                        </div>
                        <hr className='d-md-none mt-4'/>
                        <div className='col-md-6 mt-4'>
                            <div>
                                <p className='fs-normal'> Contract Cleaning</p>  
                            </div>    
                        </div>
                        <hr className='mt-3'/>
                       
                    </div>
                 </div>
            </div>
         </div>
     </section>
    </div>
    </div>
  )
}

export default Enquires