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
                <div className="commend">
                    <h2> Commend and Feedback</h2>
                </div>

                <div className="row mt-5 d-flex">
                    <div className="col-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" style={{ width: 400, padding: 15 }} />
                            <label for="exampleFormControlInput1" className="form-label mt-4">Email </label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" style={{ width: 400, padding: 15 }} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label mt-4">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{ width: 400 }}></textarea>
                        </div>
                        <Button className="m-auto">Send Message</Button>

                        
                    </div>
                    <div className="col-6">
                        <div className="commend">
                            <h2>Our Branches</h2>
                        </div>
                        <div className="commend">
                            <h4>Hakse Kirirom 1</h4>                            
                        </div>
                        <p><b>Address:</b>#145Eo,Sihanouk Boulevard,Phnom Penh,Cambodia.</p> 
                        <p><b>Cutomer Service:</b> (855-23) 212 145.</p> 
                        <p><b>Sale:</b> (855-12/16/13) 339 333</p>
                    </div>

                </div>


            </section>


        </>
    )
}
export default Contact;