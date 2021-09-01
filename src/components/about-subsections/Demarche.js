import { Link } from "react-router-dom";
import plante from "../../images/plante.png";
const Demarche = () => {
	return (
		<div className="about__child about__demarche">
			<h3>Notre démarche : Eco - responsable</h3>
			<p>
				Le bois est la matière première de nos barriques. Les forêts sont les
				poumons indispensables de notre planète. Conscient de l’importance de la
				protection des forêts, Ti ToNo Art s’engage auprès de REFOREST'ACTION.
			</p>
			<p>1 COMMANDE TONNEAU 225L DÉCORÉ = 1 ARBRE PLANTÉ</p>
			<img src={plante} alt="plante verte" />
			<div className="prev-next__navigation">
				<Link to="/about/valeurs" className="about__child--prevlink">
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
		</div>
	);
};

export default Demarche;
