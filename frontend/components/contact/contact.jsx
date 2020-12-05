import React from "react";

const Contact = () => {

    return(
        <div className="contact">
            <div className="contact-us">
                <h2> Have a Question?</h2>
                <div className="contact-box">
                    <div className="contact-logo"> <img className="contact-icon" src="https://nmkshop.s3.us-east-2.amazonaws.com/iphone.png" /></div> 
                    <p className="contact-text">
                        Call or Text us at <br />
                        XXXXXX <br />
                        from 8 am till 5 pm <br />
                        Monday-Friday <br />
                    </p>
                </div>
                <div className="contact-box"> 
                    <div className="contact-logo"> <img className="contact-icon" src="https://nmkshop.s3.us-east-2.amazonaws.com/inbox.png" /></div> 
                    <p className="contact-text">
                        Email Us at <br />
                        Example@example.com <br />
                        Answering within business hours <br />
                        from Monday till Friday excluding hollidays<br />
                    </p> 
                </div>  
            </div>   

            <div className="contact-form-container">
                <form autocomplete="off" className = "contact-form">
                    <h2> Send a message from here</h2>  
                        <div className="input">
                            <label htmlFor ="form-username">
                                Your name
                            </label>
                                <input 
                                type="text"
                                id="form-username"
                                className="login-input" />
                        </div> 
                        <div className="input">
                            <label htmlFor ="form-password">
                                Email
                            </label>
                                <input 
                                id="form-password"
                                className="login-input" />
                        </div>
                        <div className="input">
                            <label htmlFor ="form-password">
                                Phone Number
                            </label>
                                <input 
                                id="form-password"
                                className="login-input" />
                        </div>
                        <div className="input">
                            <label htmlFor ="form-password">
                                Message
                            </label>
                                <textarea 
                                id="form-password"
                                className="login-input message" />
                        </div>
                        <div className="input">
                            <button className="session-submit" type="submit"> Submit </button>
                        </div>
                </form>
            </div>

        </div>

     
    )
};

export default Contact;