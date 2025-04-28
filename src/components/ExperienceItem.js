// import components
import ButtonComponent from "./ButtonComponent";

function ExperienceItem(props){
    return(
        <div className="experience-item">
            <i className="fa-solid fa-suitcase experience-item-icon"></i>
            <div className="experience-item-content">
                <h5 className="experience-title app-item-title">{props.name}</h5>
                <p className="experience-time">{props.time}</p>
                <p>Roles: </p>
                <ul>
                    <li>{props.role1}</li>
                    <li>{props.role2}</li>
                    <li>{props.role3}</li>
                    <li>{props.role4}</li>
                </ul>
                <ButtonComponent className="experience-item-btn" link={props.link} text="View this project" />
            </div>
        </div>
    )
}

export default ExperienceItem;