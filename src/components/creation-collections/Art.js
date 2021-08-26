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
	const openLightbox = (e) => {
		console.log(e.nativeEvent.path[1].nextSibling.classList.contains("false"));
		console.log(e.nativeEvent.path[1].nextSibling);
		if (e.nativeEvent.path[1].nextSibling.classList.contains("false")) {
			e.nativeEvent.path[1].nextSibling.classList.remove("false");
			e.nativeEvent.path[1].nextSibling.classList.add("true");
		}
	};
	const closeLightbox = (e) => {
		console.log(e.nativeEvent.path[1].classList.contains("true"));
		if (e.nativeEvent.path[1].classList.contains("true")) {
			e.nativeEvent.path[1].classList.remove("true");
			e.nativeEvent.path[1].classList.add("false");
		}
	};
	return (
		<div className="art__container subcreation__container">
			<div>
				<p className="art__txt">
					Créations artistiques réalisées selon l'inspiration de Robin. La
					technique utilisée est la peinture acrylique. Un certificat
					d'authenticité est délivré pour garantir le caractère unique de
					l’œuvre.
				</p>
			</div>
			<div className="img__container">
				<figure onClick={(e) => openLightbox(e)}>
					<img
						src={voilier}
						alt="tonneau d'un voilier"
						// onMouseEnter={(e) => (e.currentTarget.src = papillon2)}
						// onMouseLeave={(e) => (e.currentTarget.src = papillon)}
					/>
				</figure>
				<div className="subcreation__lightbox false">
					<button
						onClick={(e) => closeLightbox(e)}
						className="subcreation__lightbox--close"
					>
						X
					</button>
					<Carousel imgs={voilierArray} mode="manual" />
				</div>
				<div>
					<p>Peinture acrylique - Mai 2021</p>
					<p>Certificat d'authenticité</p>
					<p>2500€</p>
					<p>Acquis</p>
				</div>
			</div>
			<div className="img__container">
				<figure onClick={(e) => openLightbox(e)}>
					<img src={terre} alt="tonneau d'un lotus" />
					<figcaption>Terre natale</figcaption>
				</figure>
				<div className="subcreation__lightbox false">
					<button
						onClick={(e) => closeLightbox(e)}
						className="subcreation__lightbox--close"
					>
						X
					</button>
					<Carousel imgs={terreArray} mode="manual" />
				</div>
			</div>
		</div>
	);
};

export default Art;
