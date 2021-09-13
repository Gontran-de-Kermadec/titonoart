import { Link } from "react-router-dom";
import "../style/About.css";
import aboutMenu from "../images/about-menu.jpg";

function About() {
	return (
		<div className="about">
			<div className="about__introduction">
				<h2>À Propos de Ti ToNo Art</h2>
				<p>
					Ti ToNo Art propose des créations exclusives de styles, de motifs et
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
					voulons que vous vous sentiez bien chez vous, Ti ToNo Art y ajoute une
					nouvelle touche d'émotion.
				</p>
			</div>
			<div>
				<div className="about__subsections">
					<Link className="about__menu" to="/about/origin">
						<h3>L'origine</h3>
						<div className="about__menu--img">
							<img className="img-1" src={aboutMenu} alt="" />
						</div>
					</Link>
					<Link to="/about/support" className="about__menu">
						<h3>Notre support</h3>
						<div className="about__menu--img">
							<img className="img-2" src={aboutMenu} alt="" />
						</div>
					</Link>
					<Link to="/about/valeurs" className="about__menu">
						<h3>Nos valeurs</h3>
						<div className="about__menu--img">
							<img className="img-3" src={aboutMenu} alt="" />
						</div>
					</Link>
					<Link to="/about/demarche" className="about__menu">
						<h3>
							Notre démarche :<br />
							Eco - responsable
						</h3>
						<div className="about__menu--img">
							<img className="img-4" src={aboutMenu} alt="" />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default About;
