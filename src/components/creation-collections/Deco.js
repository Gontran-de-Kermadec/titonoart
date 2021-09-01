import { Link } from "react-router-dom";
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
		<div>
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
						<button
							onClick={(e) => openCloseLightbox(e, "close")}
							className="subcreation__lightbox--close"
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
						<p>Acquis</p>
					</div>
				</div>
			</div>
			<Link to="/creation/bar" className="about__child--prevlink">
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
			<Link to="/creation/yourself" className="about__child--nextlink">
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
				<p>À votre image</p>
			</Link>
			<a href="mailto:titonoart@gmail.com">Demandez un devis</a>
		</div>
	);
};

export default Deco;
