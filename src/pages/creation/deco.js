// import papillon from "../../images/papillon1.jpg";
// import lotus from "../../images/lotus.jpg";
// import pirate from "../../images/pirate.jpg";
// import roche from "../../images/roche.jpg";
// import tortue from "../../images/tortue.jpg";
// import PrevNextNav from "../Prevnextnav";
// import CreationCard from "./CreationCard";
// import Prev from "../utils/Prev";

import CreationCard from "../../components/creation-collections/CreationCard";
import creationStyle from "../../style/Creation.module.css";
import PrevNextNav from "../../components/Prevnextnav";
//import Next from "../../components/utils/Next";
import Prev from "../../components/utils/Prev";

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
	return (
		<div>
			<div className={creationStyle.creation__subsection}>
				{/* <div className="deco__container creation__subsection"> */}
				<Prev route="/creation/bar" btnName="Bar" />
				<div className={creationStyle.creation__subsection__allCards}>
					{/* <div className="creation__subsection--allCards"> */}
					<CreationCard
						img="/images/papillon01.jpg"
						// img={papillon}
						imgArr={papillonArray}
						futTitle="Papillon"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/lotus0.jpg"
						// img={lotus}
						imgArr={lotusArray}
						futTitle="Christaline"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/pirate0.jpg"
						// img={pirate}
						imgArr={pirateArray}
						futTitle="Caribbean pirate"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/roche0.jpg"
						// img={roche}
						imgArr={rocheArray}
						futTitle="Roche gravée"
						futAvailability="Acquis"
					/>
					<CreationCard
						img="/images/tortue0.jpg"
						// img={tortue}
						imgArr={tortueArray}
						futTitle="Gocho-Etchea"
						futAvailability="Acquis"
					/>
				</div>
			</div>
			<div>
				<a href="mailto:titonoart@gmail.com">
					<p className={creationStyle.creation__subsection__devis}>
						Demandez un devis
					</p>
					{/* <p className="creation__subsection--devis">Demandez un devis</p> */}
				</a>
			</div>
			<PrevNextNav propsInfos={navigationInfos} />
		</div>
	);
};

export default Deco;
