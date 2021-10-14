import papillon from "../../images/papillon1.jpg";
import lotus from "../../images/lotus.jpg";
import pirate from "../../images/pirate.jpg";
import roche from "../../images/roche.jpg";
import tortue from "../../images/tortue.jpg";
import Carousel from "../Carousel";
import PrevNextNav from "../Prevnextnav";

const Deco = () => {
	const navigationInfos = {
		direction: "prev",
		route: "/creation/bar",
		btnName: "Bar",
		devis: true,
	};
	const papillonArray = [
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
	const rocheArray = [
		"/images/roche.jpg",
		"/images/roche1.jpg",
		"/images/roche2.jpg",
		"/images/roche3.jpg",
	];
	const tortueArray = [
		"/images/tortue.jpg",
		"/images/tortue1.jpg",
		"/images/tortue2.jpg",
		"/images/tortue3.jpg",
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
			<div className="deco__container creation__subsection">
				<div className="creation__subsection--card">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchEnd={(e) => openCloseLightbox(e, "open")}
					>
						<img src={papillon} alt="tonneau d'un papillon" />
					</figure>
					<div className="creation__subsection--lightbox false">
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
				<div className="creation__subsection--card">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchEnd={(e) => openCloseLightbox(e, "open")}
					>
						<img src={lotus} alt="tonneau d'un lotus" />
					</figure>
					<div className="creation__subsection--lightbox false">
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
				<div className="creation__subsection--card">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchEnd={(e) => openCloseLightbox(e, "open")}
					>
						<img src={pirate} alt="tonneau d'un pirate" />
					</figure>
					<div className="creation__subsection--lightbox false">
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
				<div className="creation__subsection--card">
					<figure
						onClick={(e) => openCloseLightbox(e, "open")}
						onTouchEnd={(e) => openCloseLightbox(e, "open")}
					>
						<img src={roche} alt="tonneau décoré" />
					</figure>
					<div className="creation__subsection--lightbox false">
						<button
							onClick={(e) => openCloseLightbox(e, "close")}
							className="subcreation__lightbox--close"
						>
							X
						</button>
						<Carousel imgs={rocheArray} mode="manual" />
					</div>
					<div>
						<h3>Roche gravée</h3>
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
						<img src={tortue} alt="tonneau décoré" />
					</figure>
					<div className="creation__subsection--lightbox false">
						<button
							onClick={(e) => openCloseLightbox(e, "close")}
							className="subcreation__lightbox--close"
						>
							X
						</button>
						<Carousel imgs={tortueArray} mode="manual" />
					</div>
					<div>
						<h3>Gocho-Etchea</h3>
						<p>Acquis</p>
					</div>
				</div>
			</div>
			<PrevNextNav propsInfos={navigationInfos} />
		</div>
	);
};

export default Deco;
