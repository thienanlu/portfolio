//import components
import ButtonComponent from './ButtonComponent';

// import css files
import '../assets/css/slider.css'

// import media
import sliderImg from '../assets/img/slider-img.webp'

function Slider(){
    return(
        <div className="slider">
            <img src={sliderImg} alt="slider background" />
            <div className="slider-textbox">
                <h2>LU HOANG THIEN AN</h2>
                <p>I'm a Front-end Developer - UX/UI Designer</p>
                <ButtonComponent link="/" text="Download my CV" />
            </div>
        </div>
    )
}

export default Slider;