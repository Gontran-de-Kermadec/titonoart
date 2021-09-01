import { Link } from "react-router-dom";

function Origin() {
	return (
		<div className="about__child content__origin">
			<p className="about__origin--bold">
				Créations uniques & singulières, peintes à la main avec inspiration,
				illumineront votre intérieur.
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
			<div className="prev-next__navigation navigation--right">
				<Link to="/about/support" className="about__child--nextlink">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="angle-double-right"
						// class="svg-inline--fa fa-angle-double-right fa-w-14"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
						></path>
					</svg>
					<p>Notre support</p>
				</Link>
			</div>
		</div>
	);
}

export default Origin;
