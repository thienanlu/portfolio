function SkillItem(props){
    return(
        <div className="col-lg-3 col-sm-6">
            <div className="skill-item">
                <i className={props.icon} style={{color: props.color}}></i>
                <p style={{color: props.color}}>{props.name}</p>
            </div>
        </div>
    )
}

export default SkillItem;