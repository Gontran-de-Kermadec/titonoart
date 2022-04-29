export default function Valeurs() {
	const infos = {
		direction: "both",
		route: ["/about/support", "/about/demarche"],
		btnName: ["Notre support", "Notre éthique"],
		devis: false,
	};
	return (
		<div className="about__subsection about__subsection--valeur">
			<h3>Nos valeurs :</h3>
			<div className="about__subsection--flex">
				{/* <Prev route="/about/support" btnName="Notre support" /> */}
				<div>
					<p>
						<span>L'HUMAIN</span>
						Toujours soucieux d’un excellent relationnel, nous favorisons les
						échanges humains et de proximité.
					</p>
					<p>
						<span>LA PASSION</span>
						Au-delà de nos horizons différents, cette activité nous réunit pour
						l’amour de l’art et de l’émotion qui s’en dégage.
					</p>
					<p>
						<span>LE PARTAGE</span>
						Nous partageons un produit original fruit de l'imaginaire de
						l’artiste ou personnalisable selon vos envies.
					</p>
					<p>
						<span>L'ENVIRONNEMENT</span>« Créer » veut aussi parfois dire «
						Recycler » car la préservation de l’environnement est essentielle.
						Notre façon de consommer peut être plus qualitative et durable.
					</p>
				</div>
				{/* <Next route="/about/demarche" btnName="Notre éthique" /> */}
			</div>
			{/* <PrevNextNav propsInfos={infos} /> */}
		</div>
	);
}
