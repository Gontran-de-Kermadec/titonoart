import bar from "../../images/bar.jpg";
import carib1 from "../../images/carib1.jpg";
import carib2 from "../../images/carib2.jpg";
import carib3 from "../../images/carib3.jpg";
import carib4 from "../../images/carib4.jpg";
import minifut from "../../images/mini_fut.jpg";
import rokamir from "../../images/rokamir.jpg";
import antilles from "../../images/antilles.jpg";
import palmTree from "../../images/palm_tree.jpg";
import PrevNextNav from "../Prevnextnav";
import CreationCard from "./CreationCard";
import Prev from "../utils/Prev";
import Next from "../utils/Next";

const Bar = () => {
	const navigationInfos = {
		direction: "both",
		route: ["/creation/art", "/creation/deco"],
		btnName: ["Art", "Déco"],
		devis: true,
	};
	const minifutArray = [
		"/images/mini_fut.jpg",
		"/images/mini_fut1.jpg",
		"/images/mini_fut2.jpg",
		"/images/mini_fut3.jpg",
	];
	const barArray = [
		"/images/bar.jpg",
		"/images/bar1.jpg",
		"/images/bar2.jpg",
		"/images/bar3.jpg",
	];
	const carib1Array = [
		"/images/carib1.jpg",
		"/images/carib11.jpg",
		"/images/carib12.jpg",
		"/images/carib13.jpg",
	];
	const carib2Array = [
		"/images/carib2.jpg",
		"/images/carib21.jpg",
		"/images/carib22.jpg",
		"/images/carib23.jpg",
	];
	const carib3Array = [
		"/images/carib3.jpg",
		"/images/carib31.jpg",
		"/images/carib32.jpg",
		"/images/carib33.jpg",
	];
	const carib4Array = [
		"/images/carib4.jpg",
		"/images/carib41.jpg",
		"/images/carib42.jpg",
		"/images/carib43.jpg",
	];
	const rokamirArray = [
		"/images/rokamir.jpg",
		"/images/rokamir1.jpg",
		"/images/rokamir2.jpg",
		"/images/rokamir3.jpg",
	];
	const antillesArray = [
		"/images/antilles.jpg",
		"/images/antilles1.jpg",
		"/images/antilles2.jpg",
		"/images/antilles3.jpg",
	];
	const palmTreeArray = [
		"/images/palm_tree.jpg",
		"/images/palm_tree1.jpg",
		"/images/palm_tree2.jpg",
		"/images/palm_tree3.jpg",
	];
	return (
		<div>
			<div className="creation__subsection--intro">
				<p>
					Chaque pièce est réalisée à la main dans l’atelier Ti Tono Art. Chaque
					production est donc unique. Méticuleux et habile, Robin design et
					fabrique une gamme de « coffres-forts » aux finitions soignées. Le
					bois est une matière où l’imperfection naturelle est source de plaisir
					pour celui qui le travaille.
				</p>
			</div>
			<div className="bar__container creation__subsection">
				<Prev route="/creation/art" btnName="Art" />
				<div className="creation__subsection--allCards">
					<CreationCard
						img={minifut}
						imgArr={minifutArray}
						futTitle="Mini Tono 3/5 litres"
						futAvailability="Disponible"
					/>
					<CreationCard
						img={bar}
						imgArr={barArray}
						futTitle="CF N°1"
						futAvailability="Acquis"
					/>
					<CreationCard
						img={carib1}
						imgArr={carib1Array}
						futTitle="CF Caribbean selection 1/4"
						futAvailability="Disponible"
					/>
					<CreationCard
						img={carib2}
						imgArr={carib2Array}
						futTitle="CF Caribbean selection 2/4"
						futAvailability="Acquis"
					/>
					<CreationCard
						img={carib3}
						imgArr={carib3Array}
						futTitle="CF Caribbean selection 3/4"
						futAvailability="Disponible"
					/>
					<CreationCard
						img={carib4}
						imgArr={carib4Array}
						futTitle="CF Caribbean selection 4/4"
						futAvailability="Acquis"
					/>
					<CreationCard
						img={rokamir}
						imgArr={rokamirArray}
						futTitle="CF Best gift for mum"
						futAvailability="Acquis"
					/>
					<CreationCard
						img={antilles}
						imgArr={antillesArray}
						futTitle="CF Petites Antilles"
						futAvailability="Acquis"
					/>
					<CreationCard
						img={palmTree}
						imgArr={palmTreeArray}
						futTitle="CF Palm Tree"
						futAvailability="Disponible"
					/>
				</div>
				<Next route="/creation/deco" btnName="Déco" />
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

export default Bar;
