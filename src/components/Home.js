import Carousel from "./Carousel";
import "../style/Home.css";
import colibri from "../images/colibri.svg";
import popup from "../images/popup.svg";

function Home() {
	const imgArray = [
		"/images/slider0.jpg",
		"/images/slider1.jpg",
		"/images/slider2.jpg",
		"/images/slider3.jpg",
	];
	return (
		<div>
			<Carousel imgs={imgArray} mode="auto" />
			<div className="homepage__partenaire">
				<p>Où retrouver nos créations</p>
				<a href="https://www.colibri-spirit.com/" target="__blank">
					<img src={colibri} alt="logo"></img>
				</a>
				<a href="https://popupstory.fr/" target="__blank">
					<img src={popup} alt="logo"></img>
				</a>
			</div>
			<div className="homepage__contact">
				<h2>Contactez-nous</h2>
				<a href="mailto:titonoart@gmail.com">titonoart@gmail.com</a>
				<br />
			</div>
		</div>
	);
}

export default Home;
