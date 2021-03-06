import voilier from "../../images/voilier.jpg";
import terre from "../../images/terre.jpg";
import nature from "../../images/nature.jpg";
import PrevNextNav from "../Prevnextnav";
import CreationCard from "./CreationCard";
// import Prev from "../utils/Prev";
import Next from "../utils/Next";

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
	const natureArray = [
		"/images/nature.jpg",
		"/images/nature1.jpg",
		"/images/nature2.jpg",
		"/images/nature3.jpg",
		"/images/nature4.jpg",
	];
	return (
		<div className="art__container">
			<div className="creation__subsection--intro">
				<p>
					Créations artistiques réalisées selon l'inspiration de Robin. La
					technique utilisée est la peinture acrylique. <br />
					Un certificat d'authenticité est délivré pour garantir le caractère
					unique de l’œuvre.
				</p>
			</div>
			<div className="creation__subsection">
				{/* <Prev route="/creation/bar" btnName="Bar" /> */}
				<div></div>
				<div className="creation__subsection--allCards">
					<CreationCard
						img={voilier}
						imgArr={voilierArray}
						futTitle={"Nuance sur la baie"}
						futDate="Peinture acrylique - Mai 2021"
						futAvailability="Acquis"
					/>
					<CreationCard
						img={terre}
						imgArr={terreArray}
						futTitle="Terre natale"
						futDate="Peinture acrylique - Mai 2021"
						futAvailability="Disponible"
					/>
					<CreationCard
						img={nature}
						imgArr={natureArray}
						futTitle="Luxuriante nature"
						futDate="Peinture acrylique - Septembre 2021"
						futAvailability="Disponible"
					/>
				</div>
				<Next route="/creation/bar" btnName="Bar" />
				{/* <div></div> */}
			</div>
			<div>
				<a href="mailto:titonoart@gmail.com">
					<p className="creation__subsection--devis">Demandez un devis</p>
				</a>
			</div>
			<PrevNextNav propsInfos={navigationInfos} />
		</div>
	);
};

export default Art;
