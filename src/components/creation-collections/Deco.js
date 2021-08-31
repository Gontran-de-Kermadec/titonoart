import papillon from "../../images/papillon1.jpg";
//import papillon2 from "../../images/papillon3.jpg";
import lotus from "../../images/lotus.jpg";
import pirate from "../../images/pirate.jpg";
import "../../style/Subcreation.css";
import Carousel from "../Carousel";

const Deco = () => {
	const papillonArray = [
		// "/images/papillon.jpg",
		"/images/papillon1.jpg",
		"/images/papillon2.jpg",
		"/images/papillon3.jpg",
	];
	const lotusArray = [
		"/images/lotus.jpg",
		"/images/lotus1.jpg",
		"/images/lotus2.jpg",
		"/images/lotus3.jpg",
	];
	const pirateArray = [
		"/images/pirate.jpg",
		"/images/pirate1.jpg",
		"/images/pirate2.jpg",
		"/images/pirate3.jpg",
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
						src={papillon}
						alt="tonneau d'un papillon"
						// onMouseEnter={(e) => (e.currentTarget.src = papillon2)}
						// onMouseLeave={(e) => (e.currentTarget.src = papillon)}
					/>
					{/* <figcaption>Papillon</figcaption> */}
				</figure>
				<div className="subcreation__lightbox false">
					{/* <div className="deco__lightbox false"> */}
					<button
						onClick={(e) => openCloseLightbox(e, "close")}
						className="subcreation__lightbox--close"
						// className="deco__lightbox--close"
					>
						X
					</button>
					<Carousel imgs={papillonArray} mode="manual" />
				</div>
				<div>
					<h3>Papillon</h3>
					<p>Acquis</p>
				</div>
			</div>
			<div className="img__container">
				<figure
					onClick={(e) => openCloseLightbox(e, "open")}
					onTouchStart={(e) => openCloseLightbox(e, "open")}
				>
					<img src={lotus} alt="tonneau d'un lotus" />
					{/* <figcaption>Christaline</figcaption> */}
				</figure>
				<div className="subcreation__lightbox false">
					<button
						onClick={(e) => openCloseLightbox(e, "close")}
						className="subcreation__lightbox--close"
					>
						X
					</button>
					<Carousel imgs={lotusArray} mode="manual" />
				</div>
				<div>
					<h3>Christaline</h3>
					<p>Acquis</p>
				</div>
			</div>
			<div className="img__container">
				<figure
					onClick={(e) => openCloseLightbox(e, "open")}
					onTouchStart={(e) => openCloseLightbox(e, "open")}
				>
					<img src={pirate} alt="tonneau d'un pirate" />
					{/* <figcaption>Caribbean pirate</figcaption> */}
				</figure>
				<div className="subcreation__lightbox false">
					<button
						onClick={(e) => openCloseLightbox(e, "close")}
						className="subcreation__lightbox--close"
					>
						X
					</button>
					<Carousel imgs={pirateArray} mode="manual" />
				</div>
				<div>
					<h3>Caribbean pirate</h3>
					{/* <p>1500€</p> */}
					<p>Acquis</p>
				</div>
			</div>
		</div>
	);
};

export default Deco;
