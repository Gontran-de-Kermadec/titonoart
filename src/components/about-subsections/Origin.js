// import { Link } from "react-router-dom";
import PrevNextNav from "../Prevnextnav";

function Origin() {
	const infos = {
		direction: "next",
		route: "/about/support",
		btnName: "Notre support",
		devis: false,
	};
	return (
		<div className="about__subsection about__subsection--origin">
			<p>
				<em className="about__origin--bold">
					Créations uniques & singulières, peintes à la main avec inspiration,
					illumineront votre intérieur.
				</em>
			</p>
			<h3 className="about__origin--title">L'origine</h3>
			<p>
				Ti ToNo Art a été créé en 2021 sur une idée originale de Delphine,
				évoluant dans le monde des spiritueux, et de l'artiste peintre, Robin
				Lepoutre.
			</p>
			<p>
				Ce concept vous propose des pièces de décoration que vous ne trouverez
				nulle par ailleurs, conçues sur des produits riches d'une expérience
				auxquels l'artiste offre une nouvelle destinée.
			</p>
			<p>
				L’atelier Ti ToNo Art est situé à Sainte-Rose en Guadeloupe. Découvrez
				nos réalisations on-line (instagram, facebook) ou bien physiquement dans
				nos boutiques partenaires situées à Jarry :&nbsp;
				<a href="https://www.colibri-spirit.com/" target="__blank">
					Colibri Spirit
				</a>
				&nbsp;&&nbsp;
				<a href="https://popupstory.fr/" target="__blank">
					PopUp Story.
				</a>
			</p>
			<section className="about__origin--team">
				<h3>L'équipe</h3>
				<div className="origin__team--container">
					<div className="origin__team--img"></div>
					<div className="origin__team--infos">
						<p>Delphine</p>
						<p>loremloremloremloremloremloremloremloremloremlorem</p>
					</div>
				</div>
				<div className="origin__team--container">
					<div className="origin__team--img"></div>
					<div className="origin__team--infos">
						<p>Robin</p>
						<p>loremloremloremloremloremloremloremloremloremlorem</p>
					</div>
				</div>
			</section>
			<PrevNextNav propsInfos={infos} />
		</div>
	);
}

export default Origin;
