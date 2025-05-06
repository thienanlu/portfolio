import {TypeAnimation} from 'react-type-animation'

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
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'I am a Front-end Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'I am a UX / UI Designer',
                        1000,
                    ]}
                    wrapper="p"
                    speed={20}
                    style={{ fontSize: '36px', display: 'block' }}
                    repeat={Infinity}
                />
                <ButtonComponent link="/" text="Download my CV" />
            </div>
        </div>
    )
}

export default Slider;