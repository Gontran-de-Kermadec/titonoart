import { Link } from "react-router-dom";
import "../style/About.css";

function About() {
	return (
		<div className="about">
			<div className="about__introduction">
				<h1>À Propos de Ti ToNo Art</h1>
				<p>
					Ti ToNo Art propose des créations exclusives de styles, de motifs, et
					de couleurs variés sur une matière noble : le Bois !
				</p>
				<p>
					Ces objets destinés à la décoration d’intérieur sont réalisés selon
					l’inspiration de l'artiste ou sur votre demande. Touche exotique,
					atmosphère tropicale, tout l’art de vivre « à l’antillaise » s'exprime
					dans cet esprit Caraïbes.
				</p>
				<p>
					La décoration de votre habitation reflète votre personnalité. Nous
					voulons que vous vous sentiez bien, Ti ToNo Art y ajoute une nouvelle
					touche d'émotion.
				</p>
			</div>
			<div>
				<div className="about__subsections">
					<Link className="about__subsection" to="/about/origin">
						<h3>L'origine</h3>
						<div className="bg-img"></div>
					</Link>
					<Link to="/about/support" className="about__subsection">
						<h3>Notre support</h3>
						<div className="bg-img"></div>
					</Link>
					<Link to="/about/valeurs" className="about__subsection">
						{/* <div className="about__subsection"> */}
						<h3>Nos valeurs</h3>
						<div className="bg-img"></div>
					</Link>
					<Link to="/about/demarche" className="about__subsection">
						{/* <div className="about__subsection"> */}
						<h3>
							Notre démarche :<br />
							Eco - responsable
						</h3>
						<div className="bg-img"></div>
						{/* <div className="subsection__overlay">
								<button className="overlay-btn">En savoir plus</button>
						</div> */}
						{/* </div> */}
					</Link>
				</div>
			</div>
		</div>
	);
}

export default About;
