import bar from "../../images/bar.jpg";
import Carousel from "../Carousel";

const Bar = () => {
	const barArray = [
		"/images/bar.jpg",
		"/images/bar1.jpg",
		"/images/bar2.jpg",
		"/images/bar3.jpg",
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
		<div className="bar__container subcreation__container">
			<div className="img__container">
				<figure onClick={(e) => openLightbox(e)}>
					<img
						src={bar}
						alt="tonneau d'un papillon"
						// onMouseEnter={(e) => (e.currentTarget.src = voilier2)}
						// onMouseLeave={(e) => (e.currentTarget.src = voilier)}
					/>
					<figcaption>B Numéro 01</figcaption>
				</figure>
				<div className="deco__lightbox false">
					<button
						onClick={(e) => closeLightbox(e)}
						className="deco__lightbox--close"
					>
						X
					</button>
					<Carousel imgs={barArray} mode="manual" />
				</div>
				{/* <figure>
				<img src={papillon} alt="tonneau d'un papillon"></img>
				<figcaption>Titre à definir</figcaption>
			</figure> */}
			</div>
		</div>
	);
};

export default Bar;
