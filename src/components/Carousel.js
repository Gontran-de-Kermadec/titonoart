import {useState, useEffect} from 'react';
import papillon from '../images/papillon.jpg';
import img1 from '../images/slider1.jpg';
import img2 from '../images/slider2.jpg';
import img3 from '../images/slider3.jpg';
// import arrow from '../images/arrow2.svg';
import '../style/Carousel.css';


function Carousel() {
    const imgArray = [papillon, img1, img2, img3];
    const [slideIndex, setSlideIndex] = useState(0);
    console.log(slideIndex, setSlideIndex);
    const nextSlide = () => {
        if(slideIndex !== imgArray.length - 1){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === imgArray.length - 1){
            setSlideIndex(0)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 0){
            setSlideIndex(slideIndex - 1)
        } 
        else if (slideIndex ===  0){
            setSlideIndex(imgArray.length - 1)
        }
    }
    useEffect(() => {
        const interval = 8000;
        const timer = setTimeout(() => {
          nextSlide();
        }, interval);
    
        return () => clearTimeout(timer);
      });

    return (
        <div className="carousel">
            {imgArray.map((obj, i) => {
                console.log(obj);
                return (
                    <div key={i} className={slideIndex === i  ? 'slide-img img-active' : 'slide-img'}>
                        <img src={obj} alt='img'/>
                    </div>
                )
            })}
            <button className='carousel__arrow left-arrow' onClick={()=> prevSlide()}>
                {/* <img src={arrow} alt='arrow'/> */}
                <i className="fas fa-chevron-left"></i>
            </button>
            <button className='carousel__arrow right-arrow' onClick={()=> nextSlide()}>
                {/* <img src={arrow} alt='arrow'/> */}
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Carousel;