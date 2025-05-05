import { animate, motion } from "motion/react"

// import css files
import '../assets/css/navbar.css'

function Navbar(){
    const navbar = document.querySelector('.navbar');

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
                    <li className="nav-item">About me</li>
                    <li className="nav-item">My skills</li>
                    <li className="nav-item">My education</li>
                    <li className="nav-item">Work experience</li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </motion.div>
        </motion.div>
    )
}

export default Navbar