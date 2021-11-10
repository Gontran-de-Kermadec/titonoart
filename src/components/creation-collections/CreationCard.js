import Carousel from "../Carousel";
import Loupe from "../Loupe";

const CreationCard = (props) => {
	const openCloseLightbox = (e, action) => {
		let path =
			e.nativeEvent.path ||
			(e.nativeEvent.composedPath && e.nativeEvent.composedPath());
		console.log(path);
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
		<div className="creation__subsection--card">
			<figure
				onClick={(e) => openCloseLightbox(e, "open")}
				onTouchEnd={(e) => openCloseLightbox(e, "open")}
			>
				<img src={props} alt="tonneau décoré" />
				<Loupe />
			</figure>
			<div className="creation__subsection--lightbox false">
				<button
					onClick={(e) => openCloseLightbox(e, "close")}
					className="subcreation__lightbox--close"
				>
					X
				</button>
				<Carousel imgs={props} mode="manual" />
			</div>
			<div>
				<h3>{props.futTitle}</h3>
				<p>{props.futDate}</p>
				<p className="creation__subsection--availability">
					<span className="creation__subsection--dispo"></span>
					{props.futAvailability}
				</p>
			</div>
		</div>
	);
};

export default CreationCard;
