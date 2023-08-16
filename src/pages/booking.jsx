import React from 'react'
import emailjs from "emailjs-com"

const booking
 = () => {
    const [loading, setLoading] = useState();
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs.sendForm('service_rcgqlja', 'template_tv982zp', form.current, 'h323G-r1G3JnKE4c-')
        .then((result) => {
            console.log(result.text);
            setLoading(false);
        }, (error) => {
            console.log(error.text);
            setLoading(false);
        });
    };
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
                    <form className='text-black' ref={form} onSubmit={sendEmail}>
                    <div className="row">
                            <div className="col-lg-6 col-6">
                                    <label htmlFor="InputEmail1" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="InputName" name="user_name" aria-describedby="Name" />
                            </div>
                            <div className="col-lg-6 col-6">
                                <label htmlFor="InputEmail1" class="form-label">Email address</label>
                                <input type="email" name="user_emaIL" class="form-control" id="InputEmail1" aria-describedby="email" />
                            </div>
                    </div>
                        <div className="row">
                            <div className="col-lg-6 col-6 mt-3">
                                <label htmlFor="InputTelephone" class="form-label">Telephone:</label>
                                <input type="Telephone" name="user_phone" class="form-control" id="InputTelephone" />
                            </div>
                            <div className="col-lg-6 col-6 mt-3">
                                <label htmlFor="InputPostcode" className="form-label">Postcode:</label>
                                <input type="Postcode" name="postalcode" class="form-control" id="InputPostcode" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-12 mt-3">
                                <label htmlFor="InputText" class="form-label">Please specify if its a Regular/One off/Monthly/Commercial Cleaning</label>
                                <input type="text" name="user_type" class="form-control" id="InputTelephone" />
                            </div>
                        {/* <div className="d-flex service-input mb-4 mt-3">
                        <div className="mb-3 mx-3 mt-4 form-check">
                                <input type="checkbox" class="form-check-input" id="Check1" />
                                <label class="form-check-label" htmlFor="Check1">Regular</label>
                            </div>
                        <div className="mb-3 mx-3 mt-4 form-check">
                                <input type="checkbox" class="form-check-input" id="Check1" />
                                <label className="form-check-label" htmlFor="Check1">One off</label>
                            </div>
                        <div className="mb-3 mx-3 mt-4 form-check">
                                <input type="checkbox" class="form-check-input" id="Check1" />
                                <label className="form-check-label" htmlFor="Check1">Monthly</label>
                            </div>
                        <div className="mb-3 mx-3 mt-4 form-check">
                                <input type="checkbox" class="form-check-input" id="Check1" />
                                <label Name="form-check-label" htmlFor="Check1">Commercial</label>
                            </div>
                        </div> */}

                        <div className="row">
                            <div className="col-md-12 mb-3">
                            <label htmlFor="floatingTextarea2 mb-4 mt-4">Further information:</label>
                            <div className="form-floating mt-2">
                                    <textarea className="form-control" name="message" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}} defaultValue={""} />
                                </div>
                            </div>
                        </div>
                        {
                      loading && 
                      <div className="d-grid w-sm-25 mt-2">
                        <button className="btn text-white bg-color "  type="submit" value="Send">Sendng....</button>
                            </div>
                    }

                    {
                      !loading && 
                      <div className="d-grid w-sm-25 mt-2">
                        <button className="btn text-white bg-color "  type="submit" value="Send">Submit</button>
                            </div>
                    }
                        {/* <div className="d-grid w-sm-25 mt-2">
                            <button className="btn text-white bg-color " type="button">SUBMIT</button>
                        </div> */}
                    </form>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default booking
