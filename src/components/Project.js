// import components
import ButtonComponent from './ButtonComponent'

// import media
import project1 from '../assets/img/project-1-img.webp'
import project2 from '../assets/img/lacasa-logo.webp'
import project3 from '../assets/img/project-3-img.svg'

// import css files
import '../assets/css/project.css'

function Project(){
    return(
        <section className="project app-item">
            <h3 className="app-item-title">Recent Projects</h3>
            <div className="project-category container-fluid">
                <div className="row justify-content-between">
                    <div className="col-lg-4 col-sm-12">
                        <div className="project-item">
                            <img src={project1} alt='project-thumbnail' />
                            <h4 className='project-item-name'>Lu Vietnam Website</h4>
                            <ButtonComponent link="https://luvietnam.com.vn/" text="View"></ButtonComponent>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="project-item">
                            <img src={project2} alt='project-thumbnail' />
                            <h4 className='project-item-name'>Lacasa VN Website</h4>
                            <ButtonComponent link="https://lacasavn.com/" text="View"></ButtonComponent>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="project-item">
                            <img src={project3} alt='project-thumbnail' />
                            <h4 className='project-item-name'>Capstone project</h4>
                            <ButtonComponent link="https://thienanlu.github.io/capstone/" text="View"></ButtonComponent>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project