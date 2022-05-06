import Link from "next/link";
import aboutStyle from "../style/About.module.css";
// import aboutMenu from "/images/about-menu.jpg";
function About() {
	return (
		// <div className="about">
		<div className={aboutStyle.about}>
			<div className={aboutStyle.about__introduction}>
				{/* <div className="about__introduction"> */}
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
				<div className={aboutStyle.about__subsections}>
					{/* <div className="about__subsections"> */}
					<Link href="/about/origin" passHref>
						<a href="replace" className={aboutStyle.about__menu}>
							{/* <a href="replace" className="about__menu"> */}
							<h3>L'origine</h3>
							<div className={aboutStyle.about__menu__img}>
								{/* <div className="about__menu--img"> */}
								{/* <img className="img-1" src={aboutMenu} alt="" /> */}
								<img
									className={aboutStyle.img__1}
									src="/images/about-menu.jpg"
									alt=""
								/>
							</div>
						</a>
					</Link>
					<Link href="/about/support" className="about__menu" passHref>
						<a href="replace" className={aboutStyle.about__menu}>
							<h3>Notre support</h3>
							<div className={aboutStyle.about__menu__img}>
								{/* <div className="about__menu--img"> */}
								{/* <img className="img-2" src={aboutMenu} alt="" /> */}
								<img
									className={aboutStyle.img__2}
									src="/images/about-menu.jpg"
									alt=""
								/>
							</div>
						</a>
					</Link>
					<Link href="/about/valeurs" className="about__menu" passHref>
						<a href="replace" className={aboutStyle.about__menu}>
							<h3>Nos valeurs</h3>
							{/* <div className="about__menu--img"> */}
							<div className={aboutStyle.about__menu__img}>
								{/* <img className="img-3" src={aboutMenu} alt="" /> */}
								<img
									className={aboutStyle.img__3}
									src="/images/about-menu.jpg"
									alt=""
								/>
							</div>
						</a>
					</Link>
					{/* <Link to="/about/demarche" className="about__menu"> */}
					<Link href="/about/demarche" className="about__menu" passHref>
						<a href="replace" className={aboutStyle.about__menu}>
							<h3>
								Notre démarche :<br />
								Eco - responsable
							</h3>
							{/* <div className="about__menu--img"> */}
							<div className={aboutStyle.about__menu__img}>
								<img
									className={aboutStyle.img__4}
									src="/images/about-menu.jpg"
									alt=""
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default About;
