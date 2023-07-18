import React from 'react'

const Enquires = () => {
  return (
    <div className='mt-5'>
        <div className="text-center mt-5 position-relative enquiries">
            <img src="../../../assets/cln7.jpg" alt="..."className='mt-5 enq-img'  />

                    <div class="card text-bg-light ml-5 p-3 enquiry border-0 position-absolute top-50 start-50">
                        <div class="card-body p-0 m-0">
                            <h1 className='fs-xxlarge text-color p-sm-5 p-3 m-0'>Make An Enquiry
                            <a href="/">
                                <img src="../../../assets/icons/arrow-right.png" alt="..." className='mx-2 arrrow-i'/>
                            </a>
                            </h1>
                        </div>
                    </div>
        </div>

            <section className='mission-section mt-2'>
        <div className='container text-black'>
            <div className='row'>
                <div className='col-md-10 mx-auto'>
                    <div className="row">
                    <div className='col-md-6 mt-5 p-2'>
                    <div class="card text-bg-light mb-3 border-0 what-else ">
                        <div class="card-body p-0 m-0">
                            <h1 className='fs-xxxlarge text-color p-sm-5 p-5 shadow-lg m-0'>What else does cleanse offer?</h1>
                        </div>
                    </div>
                     </div>
                     <div className='col-md-6 mt-5'>
                            <div>
                                <hr className='mb-4 '/>
                                <p className='fs-normal'>7 days a week service provision</p>
                                <hr className='mt-4 mb-4' />
                                <p className='fs-normal mb-5'>No job is too big or too small</p>  
                                <hr className='mt-4 mb-4' />
                                <p className='fs-normal '>All cleaning services covered</p>  
                            </div>    
                        </div>
        
                        <hr />
                        <div className='col-md-6 mt-4'>
                            <div>
                                <p className='fs-normal'>Reliable, experienced and friendly cleaners</p>
                            </div>    
                        </div>
                        <hr className='d-md-none mt-4'/>
                        <div className='col-md-6 mt-4'>
                            <div>
                                <p className='fs-normal'>One off cleans, regular cleans, contract cleaning and bespoke tailor made cleaning packages are a fraction of what we offer</p>  
                            </div>    
                        </div>
                        <hr className='mt-3'/>
                        <div className='col-md-6 mt-4'>
                            <div>
                                <p className='fs-normal'>No matter the job we arrange a free consultation with you to assess your property or premises and your individual cleaning needs so we can provide you with a no obligation quote</p>  
                            </div>    
                        </div>
                        <hr className='d-md-none mt-4'/>
                        <div className='col-md-6 mt-4'>
                            <div>
                                <p className='fs-normal'>We are SafeContractor accredited by Alcumus</p>  
                            </div>    
                        </div>
                        <hr className='mt-3'/>
                       
                    </div>
                 </div>
            </div>
         </div>
     </section>
    </div>
  )
}

export default Enquires