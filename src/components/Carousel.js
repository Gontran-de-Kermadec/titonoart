import { useState, useEffect } from "react";
// import papillon from "../images/papillon.jpg";
// import img1 from "../images/slider1.jpg";
// import img2 from "../images/slider2.jpg";
// import img3 from "../images/slider3.jpg";
// import arrow from '../images/arrow2.svg';
import "../style/Carousel.css";
// const imgArray = [
// 	"/images/slider0.jpg",
// 	"/images/slider1.jpg",
// 	"/images/slider2.jpg",
// 	"/images/slider3.jpg",
// ];
function Carousel(imgs) {
	console.log(imgs.imgs.length);
	// const imgArray = [papillon, img1, img2, img3];
	// const imgArray = [
	// 	"/images/slider0.jpg",
	// 	"/images/slider1.jpg",
	// 	"/images/slider2.jpg",
	// 	"/images/slider3.jpg",
	// ];
	const [slideIndex, setSlideIndex] = useState(0);
	console.log(slideIndex, setSlideIndex);
	const nextSlide = () => {
		// if (slideIndex !== imgArray.length - 1) {
		if (slideIndex !== imgs.imgs.length - 1) {
			// if (slideIndex !== index) {
			setSlideIndex(slideIndex + 1);
			// } else if (slideIndex === imgArray.length - 1) {
		} else if (slideIndex === imgs.imgs.length - 1) {
			// } else if (slideIndex === index) {
			setSlideIndex(0);
		}
	};
	// const prevSlide = () => {
	// 	if (slideIndex !== 0) {
	// 		setSlideIndex(slideIndex - 1);
	// 	} else if (slideIndex === 0) {
	// 		setSlideIndex(imgArray.length - 1);
	// 	}
	// };
	useEffect(() => {
		const interval = 6000;
		const timer = setTimeout(() => {
			nextSlide();
		}, interval);

		return () => clearTimeout(timer);
	});

	return (
		<div className="carousel">
			{/* {imgArray.map((obj, i) => { */}
			{imgs.imgs.map((obj, i) => {
				//console.log(obj);
				return (
					<div
						key={i}
						className={slideIndex === i ? "slide-img img-active" : "slide-img"}
					>
						<img src={obj} alt="img" />
					</div>
				);
			})}
			{/* <button
				className="carousel__arrow left-arrow"
				onClick={() => prevSlide()}
			>
				<svg
					className="test-svg"
					xmlns="http://www.w3.org/2000/svg"
					data-name="Layer 1"
					viewBox="0 0 100 100"
					x="0px"
					y="0px"
				>
					<polygon
						points="36.66 18.63 33.12 22.17 60.21 49.26 33.34 76.13 36.88 79.67 63.77 52.77 67.4 49.37 36.66 18.63"
						fill="#000"
						stroke="#fff"
					/>
				</svg>
			</button> */}
			{/* <button
				className="carousel__arrow right-arrow"
				onClick={() => nextSlide()}
			>
				<svg
					className="test-svg"
					xmlns="http://www.w3.org/2000/svg"
					data-name="Layer 1"
					viewBox="0 0 100 100"
					x="0px"
					y="0px"
				>
					<polygon
						points="36.66 18.63 33.12 22.17 60.21 49.26 33.34 76.13 36.88 79.67 63.77 52.77 67.4 49.37 36.66 18.63"
						fill="#000"
						stroke="#fff"
					/>
				</svg>
			</button> */}
		</div>
	);
}

export default Carousel;
