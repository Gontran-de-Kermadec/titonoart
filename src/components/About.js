import { Link } from "react-router-dom";
import "../style/About.css";

function About() {
	return (
		<div className="about">
			<div className="about__introduction">
				<h1>À Propos de Ti Tono Art</h1>
				<p>
					Ti TONO ART propose des créations exclusives de styles, de motifs, et
					de couleurs variés sur une matière noble : le Bois !
				</p>
				<p>
					Ces objets destinés à la décoration d’intérieur sont réalisés selon
					l’inspiration de l'artiste ou sur votre demande. Touche exotique,
					atmosphère tropicale, l’art de vivre « à l’antillaise », esprit
					Caraïbes, couleurs vives...
				</p>
				<p>
					La manière dont vous décorez votre habitation reflète votre
					personnalité. Nous voulons que vous vous sentiez bien chez vous, dans
					un univers qui vous ressemble.
				</p>
			</div>
			<div>
				<div className="about__subsections">
					<div className="about__subsection">
						<h3>L'origine</h3>
						<div className="bg-img"></div>
						<div className="subsection__overlay">
							<Link to="/about/origin">
								<button className="overlay-btn">En savoir plus</button>
							</Link>
						</div>
					</div>
					<div className="about__subsection">
						<h3>Notre support</h3>
						<div className="bg-img"></div>
						<div className="subsection__overlay">
							<Link to="/about/support">
								<button className="overlay-btn">En savoir plus</button>
							</Link>
						</div>
					</div>
					<div className="about__subsection">
						<h3>Nos valeurs</h3>
						<div className="bg-img"></div>
						<div className="subsection__overlay">
							<Link to="/about/valeurs">
								<button className="overlay-btn">En savoir plus</button>
							</Link>
						</div>
					</div>
					<div className="about__subsection">
						<h3>
							Notre démarche :<br />
							Eco - responsable
						</h3>
						<div className="bg-img"></div>
						<div className="subsection__overlay">
							<Link to="/about/demarche">
								<button className="overlay-btn">En savoir plus</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
