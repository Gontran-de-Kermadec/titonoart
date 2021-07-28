import "../style/Artiste.css";
import robin from "../images/robin.jpg";

function Artiste() {
	return (
		<div className="artiste">
			<h2>
				Artiste illustrateur:
				<br />
				Robin Lepoutre
			</h2>
			<p>
				<em>
					Son souhait est de vous offrir une oeuvre artistique qui vous
					enchantera et qui s’harmonisera avec votre intérieur.
				</em>
			</p>
			<div className="artiste__features">
				<div className="artiste__feature">
					<div className="feature__txt">
						<p className="feature__title">SES DÉBUTS</p>
						<p>
							Originaire de Deshaies (Guadeloupe), Robin grandit dans le monde
							de l’architecture, le design et l’art grâce à son grand-père,
							Gabriel Savoye, architecte de renom. C’est à Deshaies et
							Sainte-Rose que Robin étudie jusqu’à l’obtention de son BAC. Il
							commence à pratiquer son art très tôt: Bodypainting et
							customisation pendant son temps libre...
						</p>
					</div>
					<div className="feature__img--container">
						<img className="feature__img" src={robin} alt="" />
					</div>
				</div>
				<div className="artiste__feature">
					<div className="feature__txt">
						<p className="feature__title">SA PÉRIODE D'APPRENTISSAGE</p>
						<p>
							Il quitte la Guadeloupe pour développer son talent et intègre une
							MANAA à Bordeaux afin de renforcer ses fondamentaux en art
							sappliqués. Il entre ensuite en spécialisation illustration à
							l’École supérieure des Arts ESA Saint-Luc à Bruxelles. Ce cursus
							développe ses compétences en Arts graphiques et favorise sa
							créativité et sa mobilité d’esprit.
						</p>
					</div>
					<div className="feature__img--container">
						<img className="feature__img" src={robin} alt="" />
					</div>
				</div>
				<div className="artiste__feature">
					<div className="feature__txt">
						<p className="feature__title">SON ÉXPÉRIENCE</p>
						<p>
							Robin a travaillé et collaboré avec des artistes tatoueurs à
							Paris, Bruxelles (SalonPerle Noire), Bâle (El Mundo - Suisse),
							Bordeaux , Guadeloupe (Cat eyes). Il a réalisé des illustrations
							au Canada(Attaboy) et en Guadeloupe.
						</p>
					</div>
					<div className="feature__img--container">
						<img className="feature__img" src={robin} alt="" />
					</div>
				</div>
				<div className="artiste__feature">
					<div className="feature__txt">
						<p className="feature__title">SA PERSONNALITÉ</p>
						<p>
							Curieux du monde qui l’entoure, doté d'un sens aigu de la beauté,
							de la perfection et ne négligeant aucun détail, Robin vit au
							travers de ses réalisations. Il aime partager avec d’autres
							artistes caribéens et peint avec coeur.
						</p>
					</div>
					<div className="feature__img--container">
						<img className="feature__img" src={robin} alt="" />
					</div>
				</div>
				<div className="artiste__feature">
					<div className="feature__txt">
						<p className="feature__title">AUJOURD'HUI</p>
						<p>
							Après plus de dix ans dans le monde du BodyArt, il se lance dans
							la création graphique sur fût de chêne. Chaque fût, illustré selon
							son inspiration demanière unique, est transformé en véritable «
							OEuvre d’art » . Il imagine des collections sans compromettre son
							éthique et ses valeurs et accorde de l’importance à l’origine des
							matières ainsi qu’à leur production. Robin propose un art
							conscient en donnant une seconde vie à cet objet utilisé comme
							support.
						</p>
					</div>
					<div className="feature__img--container">
						<img className="feature__img" src={robin} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Artiste;
