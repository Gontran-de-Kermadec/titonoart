import voilier from "../images/voilier.jpg";
import bar from "../images/bar.jpg";
import bar2 from "../images/bar2.jpg";
import papillon from "../images/papillon1.jpg";
import { Link } from "react-router-dom";
import voilier2 from "../images/voilier2.jpg";
import "../style/Creation.css";
import longueteau from "../images/longueteau.jpg";
import longueteau2 from "../images/longueteau2.jpg";

function Creation() {
	return (
		<div className="creation">
			<div>
				<h1>Créations</h1>
				<p>
					Toutes nos créations sont des réalisations uniques qui nécessitent de
					longues heures d’imagination & de travail. Notre volonté est de
					redonner de l’importance à la fabrication artisanale et à la création
					artistique.
				</p>
			</div>
			<div className="creation__container">
				<div className="single__creation">
					{/* <h2>Art</h2> */}
					<div className="single__creation-card">
						<figure>
							<div className="creation__img-container">
								<img
									src={voilier}
									onMouseEnter={(e) => (e.currentTarget.src = voilier2)}
									onMouseLeave={(e) => (e.currentTarget.src = voilier)}
									alt="tonneau d'un voilier"
								></img>
							</div>
							{/* <figcaption>Nuances sur la Baie #001</figcaption> */}
						</figure>
						<Link to="/creation/art">
							<button>Art</button>
						</Link>
					</div>
				</div>
				<div className="single__creation">
					{/* <h2>Bar</h2> */}
					<div className="single__creation-card">
						<figure>
							<img
								src={bar}
								onMouseEnter={(e) => (e.currentTarget.src = bar2)}
								onMouseLeave={(e) => (e.currentTarget.src = bar)}
								alt="tonneau bar"
							></img>
							{/* <figcaption>Nuances sur la Baie #001</figcaption> */}
						</figure>
						{/* <p>Bar</p> */}
						<Link to="/creation/bar">
							<button>Bar</button>
						</Link>
					</div>
				</div>
				<div className="single__creation">
					{/* <h2>Déco</h2> */}
					<div className="single__creation-card">
						<figure>
							<img
								src={papillon}
								onMouseEnter={(e) => (e.currentTarget.src = voilier2)}
								onMouseLeave={(e) => (e.currentTarget.src = papillon)}
								alt="tonneau papillon"
							></img>
							{/* <figcaption>Nuances sur la Baie #001</figcaption> */}
						</figure>
						<Link to="/creation/deco">
							<button>Déco</button>
						</Link>
					</div>
				</div>
				<div className="single__creation">
					{/* <h2>À votre image</h2> */}
					<div className="single__creation-card">
						<figure>
							<img
								src={longueteau}
								onMouseEnter={(e) => (e.currentTarget.src = longueteau2)}
								onMouseLeave={(e) => (e.currentTarget.src = longueteau)}
								alt="tonneau papillon"
							></img>
							{/* <figcaption>Nuances sur la Baie #001</figcaption> */}
						</figure>
						{/* <p>À votre image</p> */}
						<Link to="/creation/yourself">
							<button>À votre image</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Creation;
