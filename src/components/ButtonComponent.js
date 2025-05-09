import {Link} from 'react-router-dom'

function ButtonComponent(props){
    return(
        <Link to={props.link} className='button' target='_blank'>{props.text}</Link>
    )
}

export default ButtonComponent