// import { Link } from "react-router-dom";
import PrevNextNav from "../Prevnextnav";

const Valeurs = () => {
	const infos = {
		direction: "both",
		route: ["/about/support", "/about/demarche"],
		btnName: ["Notre support", "Nos démarches"],
		devis: false,
	};
	return (
		<div className="about__subsection about__subsection--valeur">
			<h3>Nos valeurs :</h3>
			<p>
				<span>L'HUMAIN</span>
				Toujours soucieux d’un excellent relationnel, nous favorisons les
				échanges humains et de proximité.
			</p>
			<p>
				<span>LA PASSION</span>
				Au-delà de nos horizons différents, cette activité nous réunie pour
				l’amour de l’art et de l’émotion qui s’en dégage.
			</p>
			<p>
				<span>PARTAGE</span>
				Nous partageons un produit original fruit de l'imaginaire de l’artiste
				ou personnalisable selon vos envies.
				{/* Nous proposons un produit à caractère unique. */}
			</p>
			<p>
				<span>L'ENVIRONNEMENT</span>« Créer » veut aussi parfois dire « Recycler
				» car la préservation de l’environnement est essentielle. Notre façon de
				consommer peut être plus qualitative et durable.
			</p>
			<PrevNextNav propsInfos={infos} />
		</div>
	);
};

export default Valeurs;
