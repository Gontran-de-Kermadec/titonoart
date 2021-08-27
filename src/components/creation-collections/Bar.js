import bar from "../../images/bar.jpg";
import Carousel from "../Carousel";

const Bar = () => {
	const barArray = [
		"/images/bar.jpg",
		"/images/bar1.jpg",
		"/images/bar2.jpg",
		"/images/bar3.jpg",
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
	// 	console.log(e.nativeEvent.path[1].nextSibling.classList.contains("false"));
	// 	if (e.nativeEvent.path[1].nextSibling.classList.contains("false")) {
	// 		e.nativeEvent.path[1].nextSibling.classList.remove("false");
	// 		e.nativeEvent.path[1].nextSibling.classList.add("true");
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
		<div className="bar__container subcreation__container">
			<div className="img__container">
				{/* <figure onClick={(e) => openCloseLightbox(e, "open")}> */}
				<figure
					onClick={(e) => openCloseLightbox(e, "open")}
					onTouchStart={(e) => openCloseLightbox(e, "open")}
				>
					<img
						src={bar}
						alt="tonneau d'un papillon"
						// onMouseEnter={(e) => (e.currentTarget.src = voilier2)}
						// onMouseLeave={(e) => (e.currentTarget.src = voilier)}
					/>
					{/* <figcaption>B Numéro 01</figcaption> */}
				</figure>
				<div className="subcreation__lightbox false">
					<button
						onClick={(e) => openCloseLightbox(e, "close")}
						className="subcreation__lightbox--close"
					>
						X
					</button>
					<Carousel imgs={barArray} mode="manual" />
				</div>
				<div>
					<p>B Numéro 01</p>
					<p>1500€</p>
					<p>Acquis</p>
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
