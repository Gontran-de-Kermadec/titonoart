import voilier from "../../images/voilier.jpg";
import terre from "../../images/terre.jpg";
import Carousel from "../Carousel";
import PrevNextNav from "../Prevnextnav";

const Art = () => {
	const navigationInfos = {
		direction: "next",
		route: "/creation/bar",
		btnName: "Bar",
		devis: true,
	};
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
		<div className="art__container">
			<div className="creation__subsection--intro">
				<p>
					Créations artistiques réalisées selon l'inspiration de Robin. La
					technique utilisée est la peinture acrylique. Un certificat
					d'authenticité est délivré pour garantir le caractère unique de
					l’œuvre.
				</p>
			</div>
			<div className="creation__subsection">
				<div className="creation__subsection--card">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchStart={(e) => openCloseLightbox(e, "open")}
					>
						<img src={voilier} alt="tonneau d'un voilier" />
					</figure>
					<div className="creation__subsection--lightbox false">
						<button
							onClick={(e) => openCloseLightbox(e, "close")}
							className="subcreation__lightbox--close"
						>
							X
						</button>
						<Carousel imgs={voilierArray} mode="manual" />
					</div>
					<div>
						<h3>Nuance sur la baie</h3>
						<p>Peinture acrylique - Mai 2021</p>
						<p>Certificat d'authenticité</p>
						<p>Acquis</p>
					</div>
				</div>
				<div className="creation__subsection--card">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchStart={(e) => openCloseLightbox(e, "open")}
					>
						<img src={terre} alt="tonneau d'un lotus" />
					</figure>
					<div className="subcreation__lightbox creation__subsection--lightbox false">
						<button
							onClick={(e) => openCloseLightbox(e, "close")}
							className="subcreation__lightbox--close"
						>
							X
						</button>
						<Carousel imgs={terreArray} mode="manual" />
					</div>
					<div>
						<h3>Terre natale</h3>
						<p>Peinture acrylique - Mai 2021</p>
						<p>Certificat d'authenticité</p>
						<p>Disponible</p>
					</div>
				</div>
			</div>
			<PrevNextNav propsInfos={navigationInfos} />
		</div>
	);
};

export default Art;
