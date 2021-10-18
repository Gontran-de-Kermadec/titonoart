// import { Link } from "react-router-dom";
import PrevNextNav from "../Prevnextnav";
import delphine from "../../images/delphine.jpg";
import robin from "../../images/robin.jpg";

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
				évoluant dans le monde des spiritueux, et de l'artiste peintre Robin
				Lepoutre.
			</p>
			<p>
				Ce concept vous propose des pièces de décoration que vous ne trouverez
				nulle par ailleurs, conçues sur des produits riches d'une expérience
				auxquels l'artiste offre une nouvelle destinée.
			</p>
			<p>
				L’atelier Ti ToNo Art est situé à Sainte-Rose en Guadeloupe. Découvrez
				nos réalisations en nous suivant sur nos pages (
				<a
					href="https://www.instagram.com/titonoart/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Instagram
				</a>
				,{" "}
				<a
					href="https://www.facebook.com/titonoart"
					target="_blank"
					rel="noopener noreferrer"
				>
					Facebook
				</a>
				) et en vous présentant dans nos boutiques partenaires situées à Jarry
				:&nbsp;
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
					<div className="origin__team--img">
						<img src={delphine} alt="Portait Delphine" />
					</div>
					<div className="origin__team--infos">
						<p className="team__infos--name">
							<em>Delphine</em>
						</p>
						<p>
							Née en Guadeloupe, a grandi entre la Bretagne et l’Alsace,
							Delphine est une voyageuse dans l’âme. En sillonnant le globe pour
							ses études et le plaisir, elle s’est imprégnée des cultures, des
							échanges humains et a développé ainsi son appétence innée pour la
							communication.
						</p>
					</div>
				</div>
				<div className="origin__team--container">
					<div className="origin__team--img">
						<img src={robin} alt="Portait Robin" />
					</div>
					<div className="origin__team--infos">
						<p className="team__infos--name">
							<em>Robin</em>
						</p>
						<p>
							Robin fait corps avec l’Ile aux belles eaux qu’il sillonne à moto,
							à pied ou à la nage. Ces paysages sont sources de bien-être mais
							également d’inspiration à l’image des dégradés de vert qui
							jalonnent la Basse-Terre et des camaïeux de bleu qui bordent
							Karukera. Si la Guadeloupe reste son port d’attache, que les idées
							foisonnent et jaillissent de son esprit d’artiste, Robin goûte,
							tout comme Delphine, au plaisir des voyages. Il a traversé les
							océans dans le cadre de sa formation, de ses activités
							professionnelles, mais également pour le plaisir simple de
							s’ouvrir aux autres. Ces lieux, aux cultures variées, nourrissent
							sa créativité et lui offre de nouvelles opportunités pour
							continuer à nous émerveiller.
						</p>
					</div>
				</div>
			</section>
			<PrevNextNav propsInfos={infos} />
		</div>
	);
}

export default Origin;
