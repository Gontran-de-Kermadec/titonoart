import voilier from "../../images/voilier.jpg";
// import voilier2 from "../../images/voilier2.jpg";
import Carousel from "../Carousel";

const Art = () => {
	const voilierArray = [
		"/images/voilier.jpg",
		"/images/voilier1.jpg",
		"/images/voilier2.jpg",
		"/images/voilier3.jpg",
	];
	const openLightbox = (e) => {
		console.log(e.nativeEvent.path[1].nextSibling.classList.contains("false"));
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
		<div className="deco__container">
			<div className="img__container">
				<figure onClick={(e) => openLightbox(e)}>
					<img
						src={voilier}
						alt="tonneau d'un papillon"
						// onMouseEnter={(e) => (e.currentTarget.src = voilier2)}
						// onMouseLeave={(e) => (e.currentTarget.src = voilier)}
					/>
					<figcaption>Titre à definir</figcaption>
				</figure>
				<div className="deco__lightbox false">
					<button onClick={(e) => closeLightbox(e)}>X</button>
					<Carousel imgs={voilierArray} mode="manual" />
				</div>
			</div>
		</div>
	);
};

export default Art;
