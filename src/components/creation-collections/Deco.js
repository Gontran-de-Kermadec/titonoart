import papillon from "../../images/papillon1.jpg";
import lotus from "../../images/lotus.jpg";
import pirate from "../../images/pirate.jpg";
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
						onTouchStart={(e) => openCloseLightbox(e, "open")}
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
						onTouchStart={(e) => openCloseLightbox(e, "open")}
					>
						<img src={pirate} alt="tonneau d'un pirate" />
						{/* <figcaption>Caribbean pirate</figcaption> */}
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
			</div>
			<PrevNextNav propsInfos={navigationInfos} />
		</div>
	);
};

export default Deco;
