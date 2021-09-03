import bar from "../../images/bar.jpg";
import Carousel from "../Carousel";
import PrevNextNav from "../Prevnextnav";

const Bar = () => {
	const navigationInfos = {
		direction: "both",
		route: ["/creation/art", "/creation/deco"],
		btnName: ["Art", "Déco"],
		devis: true,
	};
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
	return (
		<div>
			<div className="creation__subsection--intro">
				<p>
					Chaque pièce est réalisée à la main dans l’atelier Ti Tono Art. Chaque
					production est donc unique. Méticuleux et habile, Robin design et
					fabrique une gamme de « coffres-forts » aux finitions soignées. Le
					bois est une matière où l’imperfection naturelle est source de plaisir
					pour celui qui le travaille.
				</p>
			</div>
			<div className="bar__container creation__subsection">
				<div className="creation__subsection--card">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchStart={(e) => openCloseLightbox(e, "open")}
					>
						<img src={bar} alt="tonneau d'un papillon" />
					</figure>
					<div className="creation__subsection--lightbox false">
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
			<PrevNextNav propsInfos={navigationInfos} />
		</div>
	);
};

export default Bar;
