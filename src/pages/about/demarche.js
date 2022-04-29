export default function Demarche() {
	const navigationInfos = {
		direction: "prev",
		route: "/about/valeurs",
		btnName: "Nos valeurs",
		devis: false,
	};
	return (
		<div className="about__subsection about__subsection--demarche">
			<h3>Notre éthique : Eco-responsable</h3>
			<div className="about__subsection--flex">
				{/* <Prev route="/about/valeurs" btnName="Nos valeurs" /> */}
				<div>
					<p>
						Le bois est la matière première de nos barriques. Les forêts sont
						les poumons indispensables de notre planète. Conscients de
						l’importance de la protection de notre éco-système, Ti ToNo Art
						s’engage auprès de REFOREST'ACTION.
					</p>
					<p>Lorsque vous commandez un Ti Tono 225L, nous plantons un arbre.</p>
					{/* <img src={plante} alt="plante verte" /> */}
				</div>
				<div></div>
			</div>
			{/* <PrevNextNav propsInfos={navigationInfos} /> */}
		</div>
	);
}
