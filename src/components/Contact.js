import { useState } from "react"
import { Link } from "react-router-dom";

// import css files
import '../assets/css/contact.css'

function Contact(){
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e284af53-fb08-4290-be0f-44f1bbf333fb");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
        const data = await response.json();
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

    return(
        <section className="contact app-item">
            <h3 className="app-item-title">Contact</h3>
            <div className="container-fluid contact-wrapper">
                <div className="row">
                    <form onSubmit={onSubmit} className="col-lg-6 col-sm-12 contact-form">
                        <input type="text" name="name" required placeholder="Your name" className="form-input"/>
                        <input type="email" name="email" required placeholder="Your email" className="form-input"/>
                        <textarea name="message" required placeholder="Details" className="form-input" rows={5}></textarea>

                        <button type="submit" className="button">Send <i className="fa-regular fa-paper-plane"></i></button>

                    </form>
                    <div className="col-lg-6 col-sm-12 contact-link">
                            <h4>Hire me</h4>
                            <div className="contact-link-box">
                                <Link to="https://www.upwork.com/freelancers/~015be8b87e0183aa23?mp_source=share" className="contact-link-item">
                                    <i className="fa-brands fa-upwork"></i>
                                    <p>Upwork</p>
                                </Link>
                                <Link to="https://www.linkedin.com/in/thienan06/" className="contact-link-item">
                                    <i className="fa-brands fa-linkedin"></i>
                                    <p>Linkedin</p>
                                </Link>
                            </div>
                    </div>
                    <span>{result}</span>
                </div>
            </div>
        </section>
    )
}

export default Contact