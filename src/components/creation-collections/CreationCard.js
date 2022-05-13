import Carousel from "../Carousel";
import Loupe from "../utils/Loupe";
import creationStyle from "../../style/Creation.module.css";

const CreationCard = (props) => {
	console.log(props.img.src);
	const openCloseLightbox = (e, action) => {
		let path =
			e.nativeEvent.path ||
			(e.nativeEvent.composedPath && e.nativeEvent.composedPath());
		console.log(path);
		if (action === "open") {
			if (path[1].nextSibling.classList.contains(creationStyle.false)) {
				// if (path[1].nextSibling.classList.contains("false")) {
				path[1].nextSibling.classList.remove(creationStyle.false);
				// path[1].nextSibling.classList.remove("false");
				path[1].nextSibling.classList.add(creationStyle.true);
				// path[1].nextSibling.classList.add("true");
			}
		} else if (action === "close") {
			if (path[1].classList.contains(creationStyle.true)) {
				// if (path[1].classList.contains("true")) {
				path[1].classList.remove(creationStyle.true);
				// path[1].classList.remove("true");
				path[1].classList.add(creationStyle.false);
				// path[1].classList.add("false");
			}
		}
	};
	const dispo = (availability) => {
		if (availability.toLowerCase() === "acquis") {
			return (
				<p className={creationStyle.creation__subsection__availability}>
					Acquis
				</p>
			);
			// return <p className="creation__subsection--availability">Acquis</p>;
		} else {
			return (
				<p className={creationStyle.creation__subsection__availability}>
					{/* <p className="creation__subsection--availability"> */}
					<span className={creationStyle.creation__subsection__dispo}></span>
					Disponible
					{/* <span className="creation__subsection--dispo"></span>Disponible */}
				</p>
			);
		}
	};
	return (
		<div className={creationStyle.creation__subsection__card}>
			{/* <div className="creation__subsection--card"> */}
			<figure
				onClick={(e) => openCloseLightbox(e, "open")}
				onTouchEnd={(e) => openCloseLightbox(e, "open")}
			>
				<img src={props.img} alt="tonneau décoré" />
				<Loupe />
			</figure>
			<div
				className={
					creationStyle.creation__subsection__lightbox +
					" " +
					creationStyle.false
				}
			>
				{/* <div className="creation__subsection--lightbox false"> */}
				<button
					onClick={(e) => openCloseLightbox(e, "close")}
					className={creationStyle.subcreation__lightbox__close}
					// className="subcreation__lightbox--close"
				>
					X
				</button>
				<Carousel imgs={props.imgArr} mode="manual" />
			</div>
			<div>
				<h3>{props.futTitle}</h3>
				<p>{props.futDate}</p>
				{dispo(props.futAvailability)}
			</div>
		</div>
	);
};

export default CreationCard;
