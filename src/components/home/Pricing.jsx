import React from 'react'

const Pricing = () => {
  return (
    <div>
        <div className="container p-md-5 mt-3">
            <div className="row">
                <div className="col-md-6">
                    <div className=" mt-3 ">
                          <h1 className='fs-xxlarge line-height text-color mb-4'>Pricing Plans</h1>
                          <p className='pt-3 fs-normal text-black fs-large '>As we understand our customers have different requirements for their cleaning services we will discuss your individual cleaning needs with you and work out a pricing plan to suit you.</p>

                          <h4 className='text-color mt-md-5 mb-5'>Make an enquiry
                            <a href="/getStarted">
                                <img src="../../../assets/icons/arrow-right.png" alt="..." className='mx-2 arrrow-i'/>
                            </a>
                            </h4>
                      </div>
                </div>
                <div className="col-md-6">
                     <div className="card border-0">
                         <img src="../../../../assets/clean4.png" alt="..." className=''/>
                    </div>
                </div>
            </div>

        </div>

        <div className="container p-md-5 mt-1 pt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className=" mt-md-3">
                          <h1 className='fs-xxlarge line-height text-color mb-md-4'>Safe Contractor Accredited</h1>
                          <p className='pt-3 fs-normal text-black fs-large '>We are SafeContractor accredited by Alcumus and all our work is fully guaranteed and insured. Our experienced and friendly cleaning staff will guarantee you a safe and clean working environment within your residential space, office or commercial space, while complying with health and safety guidelines.</p>

                      </div>
                </div>
                <div className="col-md-6">
                <div className="card border-0">
                         <img src="../../../../assets/clean5.jpg" alt="..." className=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing