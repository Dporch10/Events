import "./Contact.css";
const Contact = () => {
    return (
        <>
            <div className="contact container">
                <div className="content">
                    <h6>Contact Us</h6>
                </div>

                <div className="row-justify-content-center">
                    <div className="col-sm-5">
                        <img src="./contact.jpg" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-sm-5">
                        <form>
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" className="form-control" placeholder="Enter Your Name"/>
                            </div> {" "}
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" className="form-control" placeholder="Enter Your Email"/>
                                </div> {" "}
                                <div className="form-group">
                                <label htmlFor="">How Can We help</label>
                                <textarea
                                name=""
                                placeholder="How Can We Help"
                                className="form-control"
                                id=""
                                cols="30"
                                rows="10"
                                ></textarea>
                                <button className="btn">Submit Now</button>
                                </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    );
};
export default Contact;