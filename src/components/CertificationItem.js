import ButtonComponent from "./ButtonComponent"

function CertificationItem(props){
    return(
        <div className="certification-item row">
            <img src={props.image} alt="certification img" className="col-lg-3 col-sm-12"/>
            <div className="certification-details col-lg-8 col-sm-12">
                <h3 className="certification-name">{props.name}</h3>
                {props.haveScore ? <p className="certification-score">{props.score}</p> : null}
                <p>{props.desc}</p>
                <ButtonComponent 
                text="View Certification on Credly" link={props.link}/>
            </div>
        </div>
    )
}

export default CertificationItem