import papillon from "../../images/papillon1.jpg";
import papillon2 from "../../images/papillon3.jpg";
import lotus from "../../images/lotus.jpg";
import pirate from "../../images/pirate.jpg";
import "../../style/Deco.css";
import Carousel from "../Carousel";
//import { useState } from "react";

const Deco = () => {
	//let bool = false;
	// let tableau = document.querySelectorAll(".img__container");
	// console.log(tableau);
	//const [display, setDisplay] = useState("false");
	// let arrayName;
	const papillonArray = [
		"/images/papillon.jpg",
		"/images/papillon1.jpg",
		"/images/papillon2.jpg",
		"/images/papillon3.jpg",
	];
	const lotusArray = [
		"/images/lotus.jpg",
		"/images/lotus1.jpg",
		"/images/lotus2.jpg",
		"/images/lotus3.jpg",
	];
	const pirateArray = [
		"/images/pirate.jpg",
		"/images/pirate1.jpg",
		"/images/pirate2.jpg",
		"/images/pirate3.jpg",
	];
	const openLightbox = (e) => {
		console.log(e.nativeEvent.path[1].nextSibling.classList.contains("false"));
		//e.stopPropagation();
		//console.log(display);
		//let one = e.currentTarget.classList;
		//if (display === "false") {
		//if (e.currentTarget.classList.contains("false")) {
		if (e.nativeEvent.path[1].nextSibling.classList.contains("false")) {
			e.nativeEvent.path[1].nextSibling.classList.remove("false");
			//e.currentTarget.classList.remove("false");
			e.nativeEvent.path[1].nextSibling.classList.add("true");
			//e.currentTarget.classList.add("true");
			//setDisplay("true");
		}
		// else if (e.currentTarget.classList.contains("true")) {
		// 	e.currentTarget.classList.remove("true");
		// 	e.currentTarget.classList.add("false");
		// 	//setDisplay("false");
		// }
		// arrayName = `${e.currentTarget.id}Array`;
		// console.log(arrayName);
	};
	const closeLightbox = (e) => {
		console.log(e.nativeEvent.path[1].classList.contains("true"));
		if (e.nativeEvent.path[1].classList.contains("true")) {
			e.nativeEvent.path[1].classList.remove("true");
			e.nativeEvent.path[1].classList.add("false");
		}
	};
	return (
		<div className="deco__container">
			{/* <div className="deco__lightbox"> */}
			{/* <div className='deco__lightbox false'>
				<Carousel imgs={arrayName} />
			</div> */}
			{/* <div id="papillon" className="img__container"> */}
			<div
				id="papillon"
				// className={display + " img__container"}
				className="false img__container"
				// onClick={(e) => {
				// 	lightbox(e);
				// }}
			>
				<figure
					className="false"
					onClick={(e) => {
						openLightbox(e);
					}}
				>
					<img
						id="papillon"
						src={papillon}
						alt="tonneau d'un papillon"
						onMouseEnter={(e) => (e.currentTarget.src = papillon2)}
						onMouseLeave={(e) => (e.currentTarget.src = papillon)}
					/>
					<figcaption>Titre à definir</figcaption>
				</figure>
				{/* {imgArray.map((img, index) => {
					return (
						<img
							key={index}
							src={img}
							className="hidden"
							alt="tonneau d'un papillon"
						/>
					);
				})} */}
				<div className="deco__lightbox false">
					<button onClick={(e) => closeLightbox(e)}>X</button>
					<Carousel imgs={papillonArray} />
				</div>
			</div>
			{/* <div id="lotus" className="img__container"> */}
			{/* <div id="papillon" className={display + " img__container"}> */}
			<div className="false img__container">
				<figure className="false" onClick={(e) => openLightbox(e)}>
					<img
						src={lotus}
						alt="tonneau d'un lotus"
						//onClick={(e) => console.log(e.currentTarget)}
					/>
					<figcaption>Titre à definir</figcaption>
				</figure>
				<div className="deco__lightbox false">
					<button onClick={(e) => closeLightbox(e)}>X</button>
					<Carousel imgs={lotusArray} />
				</div>
				{/* <div className={display + " deco__lightbox"}>
					<button onClick={(e) => lightbox(e)}>X</button>
					<Carousel imgs={arrayName} />
				</div> */}
			</div>
			<div>
				<figure className="false" onClick={(e) => openLightbox(e)}>
					<img src={pirate} alt="tonneau d'un pirate" />
					<figcaption>Titre à definir</figcaption>
				</figure>
				<div className="deco__lightbox false">
					<button onClick={(e) => closeLightbox(e)}>X</button>
					<Carousel imgs={pirateArray} />
				</div>
			</div>
		</div>
	);
};

export default Deco;
