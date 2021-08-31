import { Link } from "react-router-dom";

function Support() {
	return (
		<div className="about__child about__support">
			<h3>Notre support : Le Fût de Chêne</h3>
			<p>
				Nous avons sélectionné une tonnellerie française familiale pour son
				travail de professionnels passionnés, son expérience dans le métier
				depuis 3 générations et le respect des matières et de l’environnement.
			</p>
			<p>
				Nous travaillons uniquement avec des barriques déjà utilisées pour le
				vieillissement du vin. Ce cépage n’a pas abîmé le bois. Il l’a
				naturellement imprégné des subtils arômes de fruits rouges et de
				vanilles.
			</p>
			<p>
				Nous permettons à ce fût de perdurer dans le temps et de devenir une
				pièce authentique, atypique et surtout unique.
			</p>
			<p>
				Par ce travail, nous voulons valoriser un métier précieux et « oublié »
				: le tonnelier.
			</p>
			<Link to="/about/origin" className="about__child--prevlink">
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
				<p>Origine</p>
			</Link>
			<Link to="/about/valeurs" className="about__child--nextlink">
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
				<p>Nos valeurs</p>
			</Link>
		</div>
	);
}

export default Support;
