import { Button, ButtonGroup } from "react-bootstrap";
import gogle from "../asset/Google.png"

const Contact = () => {
    return (
        <>
            <div className="smartphone"><h1>Contact Us</h1></div>
            <hr></hr>

            <section className="container">
                <div className="google">
                    <img src={gogle}></img>
                </div>
            </section>

            <section className="contact Container ">

                <div className="row mt-5 ">
                    <div className=" col-lg-6">
                       <div className="forms">
                       <div className="smartphone">
                    <h4> Commend and Feedback</h4>
                       </div>
                       <div className=" mb-3 mt-5">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" style={{ width: 300, padding: 15 }} />
                            <label for="exampleFormControlInput1" className="form-label mt-4">Email </label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" style={{ width: 300, padding: 15 }} />
                        </div>
                        <div className="forms mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label mt-4">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{ width: 300 }}></textarea>
                        </div>
                        <Button className="m-auto">Send Message</Button>   
                      </div>                    
                    </div>
                    <div className="col-lg-6">
                        <div className="smartphone">
                            <h3>Our Branches</h3>
                        </div>
                        <div className="smartphone mt-5">
                            <h4>Mobile-Store Kirirom 1</h4>                            
                        </div>
                        <div className="add">
                        <p><b>Address:</b>#145Eo,Sihanouk Boulevard,Phnom Penh,Cambodia.</p> 
                        <p><b>Cutomer Service:</b> (855-23) 212 145.</p> 
                        <p><b>Sale:</b> (855-12/16/13) 339 333</p>

                        </div>
                        <div className="smartphone">
                            <h4>Mobile-Store Kirirom 2</h4>                            
                        </div>
                       <div className="add">
                       <p><b>Address:</b> #131Eo, Sihanouk Boulevard, Phnom Penhh, Cambodia.</p>
                        <p><b>Customer Service:</b> (855-23)221 123</p>
                        <p><b>Sale:</b> (855-89/81) 339 333</p>
                       </div>
                       


                    </div>

                </div>


            </section>


        </>
    )
}
export default Contact;