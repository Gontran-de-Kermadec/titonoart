export default function Creation() {
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
			{/* <div className="creation__container">
				<Link to="/creation/art">
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
						<button>Art</button>
					</div>
				</Link>
				<Link to="/creation/bar">
					<div className="single__creation-card creation__card">
						<figure>
							<img
								src={bar}
								onMouseEnter={(e) => (e.currentTarget.src = bar2)}
								onMouseLeave={(e) => (e.currentTarget.src = bar)}
								alt="tonneau bar"
							></img>
						</figure>
						<button>Bar</button>
					</div>
				</Link>
				<Link to="/creation/deco">
					<div className="single__creation-card creation__card">
						<figure>
							<img
								src={papillon}
								onMouseEnter={(e) => (e.currentTarget.src = pirate1)}
								onMouseLeave={(e) => (e.currentTarget.src = papillon)}
								alt="tonneau papillon"
							></img>
						</figure>
						<button>Déco</button>
					</div>
				</Link>
			</div> */}
		</div>
	);
}
