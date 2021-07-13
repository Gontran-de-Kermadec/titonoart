import papillon from "../../images/papillon1.jpg";

const Art = () => {
	return (
		<div className="deco__container">
			<figure>
				<img src={papillon} alt="tonneau d'un papillon"></img>
				<figcaption>Titre à definir</figcaption>
			</figure>
		</div>
	);
};

export default Art;
