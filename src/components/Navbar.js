import { motion } from "motion/react"

// import css files
import '../assets/css/navbar.css'

function Navbar(props){
    const aboutSection = document.querySelector('.about')
    const skillSection = document.querySelector('.skill')
    const educationSection = document.querySelector('.education')
    const experienceSection = document.querySelector('.experience')
    const projectSection = document.querySelector('.project')
    const contactSection = document.querySelector('.contact')

    return(
        <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        className="navbar-wrapper">
            <motion.div 
            initial={{ opacity: 0.8, width: 0}}
            animate={{ opacity: 1, width: 650}}
            exit={{ opacity: 0, width: 0 }}
            transition={{ ease: "easeIn", duration: 0.6 }}
            className="navbar">
                <ul>
                    <li className="nav-item" onClick={() => {aboutSection.scrollIntoView(); props.onClick()}}>About me</li>
                    <li className="nav-item" onClick={() => {skillSection.scrollIntoView(); props.onClick()}}>My skills</li>
                    <li className="nav-item" onClick={() => {educationSection.scrollIntoView(); props.onClick()}}>My education</li>
                    <li className="nav-item" onClick={() => {experienceSection.scrollIntoView(); props.onClick()}}>Work experience</li>
                    <li className="nav-item" onClick={() => {projectSection.scrollIntoView(); props.onClick()}}>Projects</li>
                    <li className="nav-item" onClick={() => {contactSection.scrollIntoView(); props.onClick()}}>Contact - Hire me</li>
                </ul>
            </motion.div>
        </motion.div>
    )
}

export default Navbar