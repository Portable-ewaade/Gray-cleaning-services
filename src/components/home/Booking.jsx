import React from 'react'

const Booking = () => {
  return (
    <div style={{backgroundColor: "#eef5ff"}}>
        <div className="container pt-5 pb-5">
            <div className='row'>
                <div className='col-lg-12 mx-auto col-md-12'>
                    <h4 className="text-color fw-bolder mb-4 text-center">
                    BOOK A CLEANER
                </h4>

                </div>
            </div>
            
            <div className="row mt-3">
                    <div className="col-lg-6  mx-auto">
                    <form className='text-black'>
                    <div className="row">
                            <div class="col-lg-6 col-6">
                                    <label htmlFor="InputEmail1" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="InputName" aria-describedby="Name" />
                            </div>
                            <div class="col-lg-6 col-6">
                                <label htmlFor="InputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="InputEmail1" aria-describedby="email" />
                            </div>
                    </div>
                        <div className="row">
                            <div class="col-lg-6 col-6 mt-3">
                                <label htmlFor="InputTelephone" class="form-label">Telephone:</label>
                                <input type="Telephone" class="form-control" id="InputTelephone" />
                            </div>
                            <div class="col-lg-6 col-6 mt-3">
                                <label htmlFor="InputPostcode" class="form-label">Postcode:</label>
                                <input type="Postcode" class="form-control" id="InputPostcode" />
                            </div>
                        </div>
                        
                        <div className="d-flex service-input mb-4 mt-3">
                        <div class="mb-3 mx-3 mt-4 form-check">
                                <input type="checkbox" class="form-check-input" id="Check1" />
                                <label class="form-check-label" htmlFor="Check1">Regular</label>
                            </div>
                        <div class="mb-3 mx-3 mt-4 form-check">
                                <input type="checkbox" class="form-check-input" id="Check1" />
                                <label class="form-check-label" htmlFor="Check1">One off</label>
                            </div>
                        <div class="mb-3 mx-3 mt-4 form-check">
                                <input type="checkbox" class="form-check-input" id="Check1" />
                                <label class="form-check-label" htmlFor="Check1">Ironing</label>
                            </div>
                        <div class="mb-3 mx-3 mt-4 form-check">
                                <input type="checkbox" class="form-check-input" id="Check1" />
                                <label class="form-check-label" htmlFor="Check1">Commercial</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 mb-3">
                            <label htmlFor="floatingTextarea2 mb-4 mt-4">Further information:</label>
                            <div className="form-floating mt-2">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}} defaultValue={""} />
                                </div>
                            </div>
                        </div>
                        <div class="d-grid w-sm-25 mt-2">
                            <button class="btn text-white bg-color " type="button">SUBMIT</button>
                        </div>
                    </form>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Booking