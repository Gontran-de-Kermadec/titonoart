import creationStyle from "../style/Creation.module.css";
import Link from "next/link";

export default function Creation() {
	return (
		<div className={creationStyle.creation}>
			{/* <div className="creation"> */}
			<div className={creationStyle.creation__intro}>
				{/* <div className="creation__intro"> */}
				<h2>Créations</h2>
				<p>
					Toutes nos créations sont des réalisations uniques qui nécessitent de
					longues heures d’imagination & de travail. <br />
					Notre volonté est de redonner de l’importance à la fabrication
					artisanale et à la création artistique.
				</p>
			</div>
			<div className={creationStyle.creation__container}>
				{/* <div className="creation__container"> */}
				<Link href="/creation/art" passHref>
					<a href="replace">
						<div
							className={
								creationStyle.single__creation__card +
								" " +
								creationStyle.creation__card
							}
						>
							{/* <div className="single__creation-card creation__card"> */}
							<figure>
								{/* <div className={creationStyle.creation__img__container}> */}
								{/* <div className="creation__img-container"> */}
								<img
									// src={voilier}
									src="/images/voilier.jpg"
									// onMouseEnter={(e) => (e.currentTarget.src = terre1)}
									onMouseEnter={(e) =>
										(e.currentTarget.src = "/images/terre1.jpg")
									}
									// onMouseLeave={(e) => (e.currentTarget.src = voilier)}
									onMouseLeave={(e) =>
										(e.currentTarget.src = "/images/voilier.jpg")
									}
									alt="tonneau d'un voilier"
								></img>
								{/* </div> */}
							</figure>
							<button>Art</button>
						</div>
					</a>
				</Link>
				<Link href="/creation/bar" passHref>
					<a href="replace">
						<div
							className={
								creationStyle.single__creation__card +
								" " +
								creationStyle.creation__card
							}
						>
							{/* <div className="single__creation-card creation__card"> */}
							<figure>
								<img
									//src={bar}
									src="/images/bar.jpg"
									onMouseEnter={(e) =>
										(e.currentTarget.src = "/images/bar1.jpg")
									}
									// onMouseEnter={(e) => (e.currentTarget.src = bar2)}
									onMouseLeave={(e) =>
										(e.currentTarget.src = "/images/bar.jpg")
									}
									// onMouseLeave={(e) => (e.currentTarget.src = bar)}
									alt="tonneau bar"
								></img>
							</figure>
							<button>Bar</button>
						</div>
					</a>
				</Link>
				<Link href="/creation/deco" passHref>
					<a href="replace">
						<div
							className={
								creationStyle.single__creation__card +
								" " +
								creationStyle.creation__card
							}
						>
							{/* <div className="single__creation-card creation__card"> */}
							<figure>
								<img
									src="/images/papillon0.jpg"
									// src={papillon}
									onMouseEnter={(e) =>
										(e.currentTarget.src = "/images/pirate1.jpg")
									}
									// onMouseEnter={(e) => (e.currentTarget.src = pirate1)}
									onMouseLeave={(e) =>
										(e.currentTarget.src = "/images/papillon0.jpg")
									}
									// onMouseLeave={(e) => (e.currentTarget.src = papillon)}
									alt="tonneau papillon"
								></img>
							</figure>
							<button>Déco</button>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
}
