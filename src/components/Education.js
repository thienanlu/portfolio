// import components
import CertificationItem from './CertificationItem';

// import media
import certification1 from '../assets/img/certificate-img-1.webp'
import certification2 from '../assets/img/certificate-img-2.webp'

// import css files
import '../assets/css/education.css'

function Education(){
    return(
        <div className="education app-item">
             <h3 className="app-item-title">Education</h3>
             <p className="app-item-desc">These certifications validate my proficiency in front-end development and English communication skills.</p>
             <section className="certification-wrapper">
                <CertificationItem 
                name="Meta Front-end Developer Certificate" 
                desc="The Meta Front-End Developer Certificate is awarded to learners who complete a series of courses on front-end web development, hosted by Coursera. With a focus on React.js, these rigorous, self-paced courses, 
                developed by Meta experts, prepare a candidate for an entry level job as a front-end developer. The courses culminate in the successful completion of a capstone project."
                image={certification1} link="https://www.credly.com/badges/3025343f-27e4-47f1-a440-42ba21654e9d"
                haveBtn={true}                />
                <CertificationItem 
                name="IELTS - English Proficiency Exam"
                haveScore={true} score="Overall Band Score: 7.0  ----- CEFR Level: C1"
                desc="IELTS is an English language proficiency exam that reports at all levels from low intermediate to very advanced. There is a general and academic version."
                image={certification2} link="https://www.credly.com/badges/3025343f-27e4-47f1-a440-42ba21654e9d"
                haveBtn={false}
                />
             </section>
        </div>
    )
}

export default Education;