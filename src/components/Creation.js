import { Link } from "react-router-dom";
import voilier from "../images/voilier.jpg";
import bar from "../images/bar.jpg";
import bar2 from "../images/bar1.jpg";
import papillon from "../images/papillon.jpg";
import terre1 from "../images/terre1.jpg";
import pirate1 from "../images/pirate1.jpg";
import "../style/Creation.css";

function Creation() {
	return (
		<div className="creation">
			<div className="creation__intro">
				<h2>Créations</h2>
				<p>
					Toutes nos créations sont des réalisations uniques qui nécessitent de
					longues heures d’imagination & de travail. <br />
					Notre volonté est de redonner de l’importance à la fabrication
					artisanale et à la création artistique.
				</p>
			</div>
			<div className="creation__container">
				<div className="single__creation-card creation__card">
					<figure>
						<div className="creation__img-container">
							<img
								src={voilier}
								onMouseEnter={(e) => (e.currentTarget.src = terre1)}
								onMouseLeave={(e) => (e.currentTarget.src = voilier)}
								alt="tonneau d'un voilier"
							></img>
						</div>
					</figure>
					<Link to="/creation/art">
						<button>Art</button>
					</Link>
				</div>
				<div className="single__creation-card creation__card">
					<figure>
						<img
							src={bar}
							onMouseEnter={(e) => (e.currentTarget.src = bar2)}
							onMouseLeave={(e) => (e.currentTarget.src = bar)}
							alt="tonneau bar"
						></img>
					</figure>
					<Link to="/creation/bar">
						<button>Bar</button>
					</Link>
				</div>
				<div className="single__creation-card creation__card">
					<figure>
						<img
							src={papillon}
							onMouseEnter={(e) => (e.currentTarget.src = pirate1)}
							onMouseLeave={(e) => (e.currentTarget.src = papillon)}
							alt="tonneau papillon"
						></img>
					</figure>
					<Link to="/creation/deco">
						<button>Déco</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Creation;
