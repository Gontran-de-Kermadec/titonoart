import { Link } from "react-router-dom";
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
		<div>
			<div>
				<p>
					Chaque pièce est réalisée à la main dans l’atelier Ti Tono Art. Chaque
					production est donc unique. Méticuleux et habile, Robin design et
					fabrique une gamme de « coffres-forts » aux finitions soignées. Le
					bois est une matière où l’imperfection naturelle est source de plaisir
					pour celui qui le travaille.
				</p>
			</div>
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
						<h3>CF N°1</h3>
						<p>Acquis</p>
					</div>
				</div>
			</div>
			<a href="mailto:titonoart@gmail.com">
				<p className="subcreation__container--devis">Demandez un devis</p>
			</a>
			<div className="prev-next__navigation">
				<Link to="/creation/art" className="about__child--prevlink">
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
					<p>Art</p>
				</Link>
				<Link to="/creation/deco" className="about__child--nextlink">
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
					<p>Déco</p>
				</Link>
			</div>
		</div>
	);
};

export default Bar;
