import { Footer, Navbar } from '@/components/common'
import { OurMission } from '@/components/home'
import React from 'react'

const about = () => {
  return (
    <div>
        <Navbar />
        <OurMission />

        <div className="container p-md-5 mt-3">
        <div className="row">
                <div className="col-md-6">
                    <div className="card border-0">
                            <img src="../../../../assets/clean3.png" alt="..." className='mb-4'/>
                        </div>
                    </div>

                <div className="col-md-6">
                    <div className="">
                          <h1 className='fs-xxlarge line-height text-color mb-3'>Why Choose Gray Cleaning</h1>
                          <p className='pt-2 fs-normal text-black fs- '>Cleanse Cleaning Specialists provides a full range of residential and commercial cleaning services in Birmingham. Whether you need a daily cleaning package, a deep clean or other cleaning services, our reliable and flexible team can cater to your needs with bespoke packages.</p>

                          <p className='text-black fs-large'>We take great pride in our work. We aim to provide a high standard of general cleaning services and specialist cleaning services, such as carpet cleaning, at affordable prices and tailored specifically to your sector and your requirements.</p>

                          <h4 className='text-color mt-1'>Make an enquiry
                            <a href="/getStarted">
                                <img src="../../../assets/icons/arrow-right.png" alt="..." className='mx-2 arrrow-i'/>
                            </a>
                            </h4>
                      </div>
                </div>
               
            </div>
        </div>
        <Footer />
  </div>
        
  )
}

export default about