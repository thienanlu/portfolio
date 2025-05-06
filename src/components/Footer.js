import { Link } from "react-router-dom"

function Footer(){

    var thisyear = new Date().getFullYear()
    return(
        <section className="footer">
            <div className="container-fluid footer-wrapper">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <p className="footer-logo">An.</p>
                    </div>
                    <div className="col-lg-6 col-sm-12 social-media">
                        <Link to="https://www.upwork.com/freelancers/~015be8b87e0183aa23?mp_source=share"><i className="fa-brands fa-upwork"></i></Link>
                        <Link to="https://www.linkedin.com/in/thienan06/"><i className="fa-brands fa-linkedin"></i></Link>
                        <Link to="https://www.facebook.com/thienan.lu.336"><i className="fa-brands fa-facebook"></i></Link>
                    </div>
                </div>
                <div className="copyright">
                    <p>{thisyear} - Designed by Lu Hoang Thien An</p>
                </div>
            </div>
        </section>
    )
}

export default Footer