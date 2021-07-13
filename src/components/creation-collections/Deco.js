import papillon from "../../images/papillon1.jpg";
import papillon2 from "../../images/papillon3.jpg";
import lotus from "../../images/lotus.jpg";
import pirate from "../../images/pirate.jpg";
import "../../style/Deco.css";
import Carousel from "../Carousel";

const Deco = () => {
	const imgArray = [
		"/images/papillon.jpg",
		"/images/papillon1.jpg",
		"/images/papillon2.jpg",
		"/images/papillon3.jpg",
	];
	return (
		<div className="deco__container">
			<div className="deco__lightbox">
				<Carousel imgs={imgArray} />
			</div>
			<figure>
				<img
					src={papillon}
					alt="tonneau d'un papillon"
					onMouseEnter={(e) => (e.currentTarget.src = papillon2)}
					onMouseLeave={(e) => (e.currentTarget.src = papillon)}
				/>
				<figcaption>Titre à definir</figcaption>
			</figure>
			<figure>
				<img src={lotus} alt="tonneau d'un lotus" />
				<figcaption>Titre à definir</figcaption>
			</figure>
			<figure>
				<img src={pirate} alt="tonneau d'un pirate" />
				<figcaption>Titre à definir</figcaption>
			</figure>
		</div>
	);
};

export default Deco;
