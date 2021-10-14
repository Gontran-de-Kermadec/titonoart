import bar from "../../images/bar.jpg";
import carib1 from "../../images/carib1.jpg";
import carib2 from "../../images/carib2.jpg";
import carib3 from "../../images/carib3.jpg";
import carib4 from "../../images/carib4.jpg";
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
	const carib1Array = [
		"/images/carib1.jpg",
		"/images/carib11.jpg",
		"/images/carib12.jpg",
		"/images/carib13.jpg",
	];
	const carib2Array = [
		"/images/carib2.jpg",
		"/images/carib21.jpg",
		"/images/carib22.jpg",
		"/images/carib23.jpg",
	];
	const carib3Array = [
		"/images/carib3.jpg",
		"/images/carib31.jpg",
		"/images/carib32.jpg",
		"/images/carib33.jpg",
	];
	const carib4Array = [
		"/images/carib4.jpg",
		"/images/carib41.jpg",
		"/images/carib42.jpg",
		"/images/carib43.jpg",
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
						onTouchEnd={(e) => openCloseLightbox(e, "open")}
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
				<div className="creation__subsection--card">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchEnd={(e) => openCloseLightbox(e, "open")}
					>
						<img src={carib1} alt="tonneau transformé en bar" />
					</figure>
					<div className="creation__subsection--lightbox false">
						<button
							onClick={(e) => openCloseLightbox(e, "close")}
							className="subcreation__lightbox--close"
						>
							X
						</button>
						<Carousel imgs={carib1Array} mode="manual" />
					</div>
					<div>
						<h3>CF Caribbean selection 1/4</h3>
						<p className="creation__subsection--availability">
							<span className="creation__subsection--dispo"></span>Disponible
						</p>
					</div>
				</div>
				<div className="creation__subsection--card">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchEnd={(e) => openCloseLightbox(e, "open")}
					>
						<img src={carib2} alt="tonneau transformé en bar" />
					</figure>
					<div className="creation__subsection--lightbox false">
						<button
							onClick={(e) => openCloseLightbox(e, "close")}
							className="subcreation__lightbox--close"
						>
							X
						</button>
						<Carousel imgs={carib2Array} mode="manual" />
					</div>
					<div>
						<h3>CF Caribbean selection 2/4</h3>
						<p>Acquis</p>
					</div>
				</div>
				<div className="creation__subsection--card">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchEnd={(e) => openCloseLightbox(e, "open")}
					>
						<img src={carib3} alt="tonneau transformé en bar" />
					</figure>
					<div className="creation__subsection--lightbox false">
						<button
							onClick={(e) => openCloseLightbox(e, "close")}
							className="subcreation__lightbox--close"
						>
							X
						</button>
						<Carousel imgs={carib3Array} mode="manual" />
					</div>
					<div>
						<h3>CF Caribbean selection 3/4</h3>
						<p className="creation__subsection--availability">
							<span className="creation__subsection--dispo"></span>Disponible
						</p>
					</div>
				</div>
				<div className="creation__subsection--card">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchEnd={(e) => openCloseLightbox(e, "open")}
					>
						<img src={carib4} alt="tonneau transformé en bar" />
					</figure>
					<div className="creation__subsection--lightbox false">
						<button
							onClick={(e) => openCloseLightbox(e, "close")}
							className="subcreation__lightbox--close"
						>
							X
						</button>
						<Carousel imgs={carib4Array} mode="manual" />
					</div>
					<div>
						<h3>CF Caribbean selection 4/4</h3>
						<p className="creation__subsection--availability">
							<span className="creation__subsection--dispo"></span>Disponible
						</p>
					</div>
				</div>
			</div>
			<PrevNextNav propsInfos={navigationInfos} />
		</div>
	);
};

export default Bar;
