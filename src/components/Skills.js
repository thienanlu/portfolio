// import components
import SkillItem from "./SkillItem";

// import css files
import '../assets/css/skill.css'

function Skills(){
    return(
        <div className="skill app-item">
            <h3 className="app-item-title">My Skills</h3>
            <p className="app-item-desc">Here are some technologies and tools in my expertise </p>
            <section className="container-fluid skill-item-gallery">
                <div className="row skill-item-wrapper">
                    <SkillItem icon="fa-brands fa-html5" name="HTML5" color="#B36767"/>
                    <SkillItem icon="fa-brands fa-css3" name="CSS3" color="#577B97"/>
                    <SkillItem icon="fa-brands fa-js" name="Javascript" color="#EEC44E"/>
                    <SkillItem icon="fa-brands fa-react" name="ReactJS" color="#61DBFB"/>
                    <SkillItem icon="fa-brands fa-bootstrap" name="Bootstrap 4" color="#BD54BD"/>
                    <SkillItem icon="fa-solid fa-mobile-screen" name="Responsive" color="#7E4A88"/>
                    <SkillItem icon="fa-brands fa-figma" name="Figma" color="#5F884A"/>
                    <SkillItem icon="fa-brands fa-github" name="Github" color="#000"/>
                </div>
            </section>
        </div>
    )
}

export default Skills;