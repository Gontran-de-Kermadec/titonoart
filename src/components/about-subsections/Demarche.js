import plante from "../../images/plante.png";
const Demarche = () => {
	return (
		<div className="about__child about__demarche">
			<h3>Notre démarche :Eco - responsable</h3>
			<p>
				Le bois est la matière première de nos barriques. Les forêts sont les
				poumons indispensables de notre planète. Conscient de l’importance de la
				protection des forêts, Ti Tono Art s’engage auprès de REFOREST'ACTION.
			</p>
			<p>1 COMMANDE TONNEAU 225L DÉCORÉ = 1 ARBRE PLANTÉ</p>
			<img src={plante} alt="plante verte" />
		</div>
	);
};

export default Demarche;
