import { Link } from "react-router-dom";
import voilier from "../../images/voilier.jpg";
import terre from "../../images/terre.jpg";
import Carousel from "../Carousel";
import "../../style/creation-collections/Art.css";

const Art = () => {
	const voilierArray = [
		"/images/voilier.jpg",
		"/images/voilier1.jpg",
		"/images/voilier2.jpg",
		"/images/voilier3.jpg",
		"/images/voilier4.jpg",
	];
	const terreArray = [
		"/images/terre.jpg",
		"/images/terre1.jpg",
		"/images/terre2.jpg",
		"/images/terre3.jpg",
		"/images/terre4.jpg",
	];
	const openCloseLightbox = (e, action) => {
		let path =
			e.nativeEvent.path ||
			(e.nativeEvent.composedPath && e.nativeEvent.composedPath());
		if (action === "open") {
			if (path[1].nextSibling.classList.contains("false")) {
				path[1].nextSibling.classList.remove("false");
				path[1].nextSibling.classList.add("true");
			}
		} else if (action === "close") {
			if (path[1].classList.contains("true")) {
				path[1].classList.remove("true");
				path[1].classList.add("false");
			}
		}
	};
	// const openLightbox = (e) => {
	// 	let path =
	// 		e.nativeEvent.path ||
	// 		(e.nativeEvent.composedPath && e.nativeEvent.composedPath());
	// 	console.log(path);
	// 	//console.log(e.nativeEvent.path[1].nextSibling.classList.contains("false"));
	// 	// if (e.nativeEvent.path[1].nextSibling.classList.contains("false")) {
	// 	// 	e.nativeEvent.path[1].nextSibling.classList.remove("false");
	// 	// 	e.nativeEvent.path[1].nextSibling.classList.add("true");
	// 	// }
	// 	if (path[1].nextSibling.classList.contains("false")) {
	// 		path[1].nextSibling.classList.remove("false");
	// 		path[1].nextSibling.classList.add("true");
	// 	}
	// };
	// const closeLightbox = (e) => {
	// 	console.log(e.nativeEvent.path[1].classList.contains("true"));
	// 	if (e.nativeEvent.path[1].classList.contains("true")) {
	// 		e.nativeEvent.path[1].classList.remove("true");
	// 		e.nativeEvent.path[1].classList.add("false");
	// 	}
	// };
	return (
		<div>
			<div>
				<p className="art__txt">
					Créations artistiques réalisées selon l'inspiration de Robin. La
					technique utilisée est la peinture acrylique. Un certificat
					d'authenticité est délivré pour garantir le caractère unique de
					l’œuvre.
				</p>
			</div>
			<div className="art__container subcreation__container">
				<div className="img__container">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchStart={(e) => openCloseLightbox(e, "open")}
					>
						<img
							src={voilier}
							alt="tonneau d'un voilier"
							// onMouseEnter={(e) => (e.currentTarget.src = papillon2)}
							// onMouseLeave={(e) => (e.currentTarget.src = papillon)}
						/>
					</figure>
					<div className="subcreation__lightbox false">
						<button
							// onClick={(e) => closeLightbox(e)}
							onClick={(e) => openCloseLightbox(e, "close")}
							className="subcreation__lightbox--close"
						>
							X
						</button>
						<Carousel imgs={voilierArray} mode="manual" />
					</div>
					<div>
						<h3>Nuance sur la baie</h3>
						<p>Peinture acrylique - Mai 2021</p>
						<p>Certificat d'authenticité</p>
						<p>Acquis</p>
					</div>
				</div>
				<div className="img__container">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchStart={(e) => openCloseLightbox(e, "open")}
					>
						{/* <figure onClick={(e) => openLightbox(e)}> */}
						<img src={terre} alt="tonneau d'un lotus" />
						{/* <figcaption>Terre natale</figcaption> */}
					</figure>
					<div className="subcreation__lightbox false">
						<button
							onClick={(e) => openCloseLightbox(e, "close")}
							// onClick={(e) => closeLightbox(e)}
							className="subcreation__lightbox--close"
						>
							X
						</button>
						<Carousel imgs={terreArray} mode="manual" />
					</div>
					<div>
						<h3>Terre natale</h3>
						<p>Peinture acrylique - Mai 2021</p>
						<p>Certificat d'authenticité</p>
						<p>Acquis</p>
					</div>
				</div>
			</div>
			<Link to="/creation/bar" className="about__child--nextlink">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="angle-double-right"
					// class="svg-inline--fa fa-angle-double-right fa-w-14"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path
						fill="currentColor"
						d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
					></path>
				</svg>
				<p>Bar</p>
			</Link>
			{/* <button></button> */}
			<a href="mailto:titonoart@gmail.com">Demandez un devis</a>
		</div>
	);
};

export default Art;
