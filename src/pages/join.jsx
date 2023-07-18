
import { Footer, Navbar } from '@/components/common'
import React from 'react'

const join = () => {
  return (
    <div>
        <Navbar />
        <div className='container text-black mt-5'>
         <div className="row">
            <div className='col-md-10 mx-auto'>
                <div className='row'>
                  <div className='col-md-6'>
                      <div className="pt-5 mt-4">
                          <h1 className='fs-xxxlarge line-height text-color mb-4 mt-5'>Join Our Team</h1>
                          <p className='pt-3 fs-normal'>Looking for cleaning jobs in Birmingham? Join the Cleanse team for competitive rates and an excellent working environment.</p>
                      </div>
                  </div>

                  <div className='col-md-6'>
                    <div className="pt-5 mt-4">
                      <div class="carousel-item active">
                           <img src="../../../assets/cln5.jpg" class="d-block w-100 h-100" alt="..."/>
                        </div>
                    </div>
                  </div>
                  
                </div>
            </div>
         </div>
        </div>

        <section className='happy-customer-section p-5 mt-3 pb-5'>
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
       
        <Footer />
    </div>
  )
}

export default join