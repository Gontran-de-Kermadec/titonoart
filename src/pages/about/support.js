import aboutStyle from "../../style/About.module.css";
import PrevNextNav from "../../components/Prevnextnav";
import Next from "../../components/utils/Next";
import Prev from "../../components/utils/Prev";

export default function Support() {
	const infos = {
		direction: "both",
		route: ["/about/origin", "/about/valeurs"],
		btnName: ["Origine", "Nos valeurs"],
		devis: false,
	};
	return (
		<div className={aboutStyle.about__subsection}>
			<h3>Notre support : Le Fût de Chêne</h3>
			<div className={aboutStyle.about__subsection__flex}>
				<Prev route="/about/origin" btnName="Origine" />
				<div>
					<p>
						Nous avons sélectionné une tonnellerie française familiale pour son
						travail de professionnels passionnés, son expérience dans le métier
						depuis trois générations et le respect des matières et de
						l’environnement.
					</p>
					<p>
						Nous travaillons uniquement avec des barriques déjà utilisées pour
						le vieillissement du vin. Ce cépage n’a pas abîmé le bois. Il l’a
						naturellement imprégné des subtils arômes de fruits rouges et de
						vanille.
					</p>
					<p>
						Par notre travail, nous permettons à ce fût de perdurer en devenant
						une pièce artistique unique et de valoriser un métier souvent
						oublié, celui de tonnelier.
					</p>
					<div className={aboutStyle.fut__support__img}>
						{/* <div className="fut__support--img"> */}
						<img src="/images/fut_support.jpg" alt="fut" />
					</div>
				</div>
				<Next route="/about/valeurs" btnName="Nos valeurs" />
			</div>

			<PrevNextNav propsInfos={infos} />
		</div>
	);
}
