import voilier from "../images/voilier.jpg";
import bar from "../images/bar.jpg";
import bar2 from "../images/bar2.jpg";
import papillon from "../images/papillon1.jpg";
import { Link } from "react-router-dom";
import voilier2 from "../images/voilier2.jpg";
import "../style/Creation.css";

function Creation() {
	return (
		<div className="creation">
			<h1>Créations</h1>
			<div className="creation__container">
				<div className="single__creation">
					<h2>Collection Art</h2>
					<Link to="/creation/art">
						<figure>
							<img
								src={voilier}
								onMouseEnter={(e) => (e.currentTarget.src = voilier2)}
								onMouseLeave={(e) => (e.currentTarget.src = voilier)}
								alt="tonneau d'un voilier"
							></img>
							<figcaption>Nuances sur la Baie #001</figcaption>
						</figure>
					</Link>
				</div>
				<div className="single__creation">
					<h2>Collection Bar</h2>
					<Link to="/creation/bar">
						<figure>
							<img
								src={bar}
								onMouseEnter={(e) => (e.currentTarget.src = bar2)}
								onMouseLeave={(e) => (e.currentTarget.src = bar)}
								alt="tonneau bar"
							></img>
						</figure>
					</Link>
				</div>
				<div className="single__creation">
					<h2>Collection Déco</h2>
					<Link to="/creation/deco">
						<figure>
							<img
								src={papillon}
								onMouseEnter={(e) => (e.currentTarget.src = voilier2)}
								onMouseLeave={(e) => (e.currentTarget.src = papillon)}
								alt="tonneau papillon"
							></img>
						</figure>
					</Link>
				</div>
				{/* <div className="single__creation">
					<h2>Collection Pirate</h2>
					<figure>
						<img
							src={bar}
							onMouseEnter={(e) => (e.currentTarget.src = voilier2)}
							onMouseLeave={(e) => (e.currentTarget.src = bar)}
							alt="tonneau bar"
						></img>
					</figure>
				</div> */}
				{/* <div className="single__creation">
					<h2>Collection Lotus</h2>
					<figure>
						<img
							src={papillon}
							onMouseEnter={(e) => (e.currentTarget.src = bar)}
							onMouseLeave={(e) => (e.currentTarget.src = papillon)}
							alt="tonneau papillon"
						></img>
					</figure>
				</div> */}
			</div>
		</div>
	);
}

export default Creation;
