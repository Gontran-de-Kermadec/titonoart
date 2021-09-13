import Carousel from "./Carousel";
import "../style/Home.css";
import "../style/Icons.css";
import colibri from "../images/colibri.svg";
import popup from "../images/popup.svg";
import Icons from "./Icons";

function Home() {
	const imgArray = [
		"/images/slider0.jpg",
		"/images/slider1.jpg",
		"/images/slider2.jpg",
		// "/images/slider3.jpg",
		// "/images/slider4.jpg",
	];
	return (
		<div className="homepage">
			<Carousel imgs={imgArray} mode="auto" />
			<p id="homepage__sentence">
				Décorez votre intérieur en faisant l’acquisition d’une œuvre artistique
				originale.
			</p>
			<section className="homepage__partenaire">
				<p>Où retrouver nos créations</p>
				<a href="https://www.colibri-spirit.com/" target="__blank">
					<img src={colibri} alt="logo"></img>
				</a>
				<a href="https://popupstory.fr/" target="__blank">
					<img src={popup} alt="logo"></img>
				</a>
			</section>
			<footer className="homepage__contact">
				<p>Contactez-nous</p>
				<a href="mailto:titonoart@gmail.com">titonoart@gmail.com</a>
				<Icons location="homepage" />
			</footer>
		</div>
	);
}

export default Home;
