// import media
import project1 from '../assets/img/project-1-img.webp'
import project2 from '../assets/img/project-2-img.webp'
import project3 from '../assets/img/project-3-img.webp'

// import css files
import '../assets/css/project.css'

function Project(){
    return(
        <section className="project app-item">
            <h3 className="app-item-title">Recent Projects</h3>
            <div className="project-category container-fluid">
                <div className="row justify-content-between">
                    <div className="col-lg-6 col-sm-12">
                        <div className="project-item">
                            <img src={project1} alt='project-thumbnail' />
                            <h4 className='project-item-name'>Lu Vietnam Website</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="project-item">
                            <img src={project2} alt='project-thumbnail' />
                            <h4 className='project-item-name'>Lacasa VN landing page</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="project-item">
                            <img src={project3} alt='project-thumbnail' />
                            <h4 className='project-item-name'>My capstone project</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project