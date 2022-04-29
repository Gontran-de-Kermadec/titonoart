//import Carousel from "./Carousel";
import Carousel from "../components/Carousel";
//import "../style/Home.css";
//import "../style/Icons.css";
// import styles from './Button.module.css'
import homeStyle from "../style/Home.module.css";
//import "../style/Home.module.css";
// import Header from "../components/Header";

//import colibri from "/images/colibri.svg";
// import popup from "../images/popup.svg";
//import Icons from "./Icons";
// import Footer from "./Footer";

function Home() {
	const imgArray = [
		"/images/slider0.jpg",
		"/images/slider1.jpg",
		"/images/slider2.jpg",
		// "/images/slider3.jpg",
		// "/images/slider4.jpg",
	];
	return (
		// <div className="homepage">
		<div>
			{/* <Header /> */}
			<div className={homeStyle.homepage}>
				<Carousel imgs={imgArray} mode="auto" />
				{/* <p id="homepage__sentence"> */}
				<p id={homeStyle.homepage__sentence}>
					Décorez votre intérieur en faisant l’acquisition d’une œuvre
					artistique originale.
				</p>
				{/* <section className="homepage__partenaire"> */}
				<section className={homeStyle.homepage__partenaire}>
					<p>Où retrouver nos créations</p>
					<a href="https://www.colibri-spirit.com/" target="__blank">
						<img src="images/colibri.svg" alt="logo"></img>
					</a>
					<a href="https://popupstory.fr/" target="__blank">
						<img src="images/popup.svg" alt="logo"></img>
					</a>
				</section>
			</div>
		</div>
	);
}

export default Home;
