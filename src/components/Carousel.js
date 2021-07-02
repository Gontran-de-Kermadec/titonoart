import papillon from '../images/papillon.jpg';
import '../style/Carousel.css';

function Carousel() {
    return (
        <div className="carousel">
            <img src={papillon} alt='papillon'></img>
        </div>
    )
}

export default Carousel;