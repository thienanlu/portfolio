// import components
import ExperienceItem from './ExperienceItem'

// import css files
import '../assets/css/experience.css'

function Experience(){
    return(
        <div className="experience app-item">
            <h3 className="app-item-title">Work Experience</h3>
            <div className="experience-wrapper">
                <ExperienceItem name="Front-end Developer - UX/UI Designer | Lu Vietnam" time="December 2024 - April 2025" 
                role1=" Designing responsive and user-centric UX/UI on Figma" 
                role2="Developing website using core technologies: HTML - CSS - JS and libraries: ReactJS and Bootstrap. "
                role3="SEO for website"
                role4="Testing and Maintaining"
                link="https://luvietnam.com.vn/"
                />
                <ExperienceItem name="Front-end Developer - Lacasa VN" time="March 2024 - September 2024" 
                    role1="Design the User Interface using Figma "
                    role2="Develop the website using HTML - CSS - JS and Bootstrap framework"
                    role3="Create responsive, mobile-first websites to ensure optimal viewing across a wide range of devices and screen sizes."
                    role4="Testing and Maintaining"
                    link="https://lacasavn.com"
                />
            </div>
        </div>
    )
}

export default Experience;