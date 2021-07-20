import { useState, useEffect } from "react";
import "../style/Carousel.css";
function Carousel(props) {
	console.log(props);
	console.log(props.mode);
	const [slideIndex, setSlideIndex] = useState(0);
	const nextSlide = () => {
		if (slideIndex !== props.imgs.length - 1) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === props.imgs.length - 1) {
			setSlideIndex(0);
		}
	};
	const prevSlide = () => {
		if (slideIndex !== 0) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 0) {
			setSlideIndex(props.imgs.length - 1);
		}
	};
	useEffect(() => {
		if (props.mode === "auto") {
			const interval = 6000;
			const timer = setTimeout(() => {
				nextSlide();
			}, interval);
			return () => clearTimeout(timer);
		}
	});
	if (props.mode === "auto") {
		return (
			<div className="carousel">
				{props.imgs.map((obj, i) => {
					return (
						<div
							key={i}
							className={
								slideIndex === i ? "slide-img img-active" : "slide-img"
							}
						>
							<img src={obj} alt="img" />
						</div>
					);
				})}
			</div>
		);
	} else if (props.mode === "manual") {
		return (
			<div className="carousel">
				{props.imgs.map((obj, i) => {
					return (
						<div
							key={i}
							className={
								slideIndex === i ? "slide-img img-active" : "slide-img"
							}
						>
							<img src={obj} alt="img" />
						</div>
					);
				})}
				<button
					className="carousel__arrow left-arrow"
					onClick={() => prevSlide()}
				>
					<svg
						className="carousel__svg"
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
				</button>
				<button
					className="carousel__arrow right-arrow"
					onClick={() => nextSlide()}
				>
					<svg
						className="carousel__svg"
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
				</button>
			</div>
		);
	}
}

export default Carousel;
