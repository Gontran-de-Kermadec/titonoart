import longueteau from "../../images/longueteau.jpg";
import longueteau2 from "../../images/longueteau2.jpg";
import Carousel from "../Carousel";

const Yourself = () => {
	const yourselfArray = [
		"/images/yourself.jpg",
		"/images/yourself1.jpg",
		"/images/yourself2.jpg",
		"/images/yourself3.jpg",
	];
	const openLightbox = (e) => {
		console.log(e.nativeEvent.path[1].nextSibling.classList.contains("false"));
		if (e.nativeEvent.path[1].nextSibling.classList.contains("false")) {
			e.nativeEvent.path[1].nextSibling.classList.remove("false");
			e.nativeEvent.path[1].nextSibling.classList.add("true");
		}
	};
	const closeLightbox = (e) => {
		console.log(e.nativeEvent.path[1].classList.contains("true"));
		if (e.nativeEvent.path[1].classList.contains("true")) {
			e.nativeEvent.path[1].classList.remove("true");
			e.nativeEvent.path[1].classList.add("false");
		}
	};
	return (
		<div className="deco__container subcreation__container">
			<div className="img__container">
				<figure onClick={(e) => openLightbox(e)}>
					<img
						src={longueteau}
						alt="tonneau d'un papillon"
						onMouseEnter={(e) => (e.currentTarget.src = longueteau2)}
						onMouseLeave={(e) => (e.currentTarget.src = longueteau)}
					/>
					<figcaption>Titre à definir</figcaption>
				</figure>
				<div className="subcreation__lightbox false">
					<button
						onClick={(e) => closeLightbox(e)}
						className="subcreation__lightbox--close"
					>
						X
					</button>
					<Carousel imgs={yourselfArray} mode="manual" />
				</div>
			</div>
		</div>
	);
};

export default Yourself;
