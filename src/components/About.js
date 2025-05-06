// import css files
import '../assets/css/about.css'

// import media
import portrait from '../assets/img/portrait-img.webp'

function About(){
    return(
        <section className="about app-item">
            <h3 className="app-item-title">About me</h3>
            <div className="container-fluid">
                <div className="row about-details justify-content-between">
                    <div className="col-lg-7 col-sm-12">
                        <p className="about-desc">
                        Hi! I'm Thien An, a passionate Front-end developer and UX/UI designer based in Ho Chi Minh City, Vietnam. 
                        With a strong foundation in HTML, CSS, and Javascript with modern frameworks like ReactJs and Bootstrap 4 and over a year of experience. I can bring your ideas and designs to life while ensuring functionality and responsiveness and also follow crucial UX design principles. 
                        </p>
                        <p className="about-desc">
                        My competencies were validated by a Meta Front-End Developer Professional Certificate and I was equipped with good English 
                        skills in both verbal and writing (IELTS 7.0, CEFR Level C1), I merge technical expertise with effective communication to collaborate efficiently in diverse, fast-paced environments.
                        </p>
                        <p className="about-desc">
                        Explore my portfolio to discover my work experience as a Front-end Developer and many projects showcase my ability to deliver you high-quality web solutions 
                        that comprise full functionality and appealing visual. 
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <img src={portrait} alt='portrait' className='about-img'/>
                    </div>
                </div>
                <div className='row about-item-wrapper'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='about-item'>
                            <i className="fa-solid fa-code"></i>
                            <p>Web Development</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='about-item'>
                            <i className="fa-solid fa-ruler-combined"></i>
                            <p>UX/UI Design</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='about-item'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <p>SEO Enhancement</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='about-item'>
                            <i className="fa-solid fa-globe"></i>
                            <p>English</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About