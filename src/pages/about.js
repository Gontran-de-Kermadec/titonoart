import Link from "next/link";
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
					La décoration de votre habitation reflète votre personnalité. Ti ToNo
					Art ajoute une nouvelle touche d'émotion.
				</p>
			</div>
			<div>
				<div className="about__subsections">
					<Link className="about__menu" href="/about/origin" passHref>
						<a href="replace">
							<h3>L'origine</h3>
							<div className="about__menu--img">
								{/* <img className="img-1" src={aboutMenu} alt="" /> */}
							</div>
						</a>
					</Link>
					<Link href="/about/support" className="about__menu" passHref>
						<a href="replace">
							<h3>Notre support</h3>
							<div className="about__menu--img">
								{/* <img className="img-2" src={aboutMenu} alt="" /> */}
							</div>
						</a>
					</Link>
					<Link href="/about/valeurs" className="about__menu" passHref>
						<a href="replace">
							<h3>Nos valeurs</h3>
							<div className="about__menu--img">
								{/* <img className="img-3" src={aboutMenu} alt="" /> */}
							</div>
						</a>
					</Link>
					{/* <Link to="/about/demarche" className="about__menu"> */}
					<Link href="/about/demarche" className="about__menu" passHref>
						<a href="replace">
							<h3>
								Notre démarche :<br />
								Eco - responsable
							</h3>
							{/* <div className="about__menu--img">
							<img className="img-4" src={aboutMenu} alt="" />
						</div> */}
						</a>
					</Link>
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default About;
