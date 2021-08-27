import longueteau from "../../images/longueteau.jpg";
import longueteau2 from "../../images/longueteau2.jpg";
import Carousel from "../Carousel";

const Yourself = () => {
	const yourselfArray = [
		"/images/yourself.jpg",
		"/images/yourself1.jpg",
		"/images/yourself2.jpg",
		"/images/yourself3.jpg",
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
		<div className="deco__container subcreation__container">
			<div className="img__container">
				<figure
					onClick={(e) => openCloseLightbox(e, "open")}
					onTouchStart={(e) => openCloseLightbox(e, "open")}
				>
					<img
						src={longueteau}
						alt="tonneau d'un papillon"
						onMouseEnter={(e) => (e.currentTarget.src = longueteau2)}
						onMouseLeave={(e) => (e.currentTarget.src = longueteau)}
					/>
					<figcaption>Titre à definir</figcaption>
				</figure>
				<div className="subcreation__lightbox false">
					<button
						onClick={(e) => openCloseLightbox(e, "close")}
						className="subcreation__lightbox--close"
					>
						X
					</button>
					<Carousel imgs={yourselfArray} mode="manual" />
				</div>
			</div>
		</div>
	);
};

export default Yourself;
