import { Link } from "react-router-dom";

const Valeurs = () => {
	return (
		<div className="about__child about__valeur">
			<h3>Nos valeurs :</h3>
			<p>
				<span>L'HUMAIN</span>
				Toujours soucieux d’un excellent relationnel, nous favorisons les
				échanges humains et de proximité.
			</p>
			<p>
				<span>LA PASSION</span>
				Au-delà de nos horizons différents, cette activité nous réunie pour
				l’amour de l’art et de l’émotion qui s’en dégage.
			</p>
			<p>
				<span>LA PERSONNALISATION</span>
				Nous proposons un produit à caractère unique.
			</p>
			<p>
				<span>L'ENVIRONNEMENT</span>« Créer » veut aussi parfois dire « recycler
				», la préservation de l’environnement est essentielle. Notre façon de
				consommer peut être plus qualitative et durable.
			</p>
			<div className="prev-next__navigation">
				<Link to="/about/support" className="about__child--prevlink">
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
					<p>Notre suport</p>
				</Link>
				<Link to="/about/demarche" className="about__child--nextlink">
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
					<p>Nos démarches</p>
				</Link>
			</div>
		</div>
	);
};

export default Valeurs;
