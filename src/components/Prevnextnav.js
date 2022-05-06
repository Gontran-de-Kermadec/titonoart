// import { Link } from "react-router-dom";
import Link from "next/link";
// import "../style/Prevnextnav.css";
import prevNextNav from "../style/PrevNextNav.module.css";
const PrevNextNav = (props) => {
	console.log(props.propsInfos);
	console.log(props.propsInfos.direction);
	console.log(props.propsInfos.devis);
	if (props.propsInfos.direction === "prev") {
		return (
			<div className={prevNextNav.prevNext__navigation}>
				{/* <div className="prev-next__navigation"> */}
				{/* <Link to={props.propsInfos.route} className="prevbutton"> */}
				{/* <Link to={props.propsInfos.route} className={prevNextNav.prevbutton}> */}
				<Link href={props.propsInfos.route} passHref>
					<a href="replace" className={prevNextNav.prevbutton}>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="angle-double-right"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								fill="currentColor"
								d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
							></path>
						</svg>
						<p className={prevNextNav.direction__btnName}>
							{props.propsInfos.btnName}
						</p>
					</a>
				</Link>
				{props.propsInfos.devis ? (
					<a href="mailto:titonoart@gmail.com">
						<p className={prevNextNav.prevNext_navigation_devis}>
							Demandez un devis
						</p>
						{/* <p className="prev-next__navigation--devis">Demandez un devis</p> */}
					</a>
				) : (
					console.log("false")
				)}
			</div>
		);
	} else if (props.propsInfos.direction === "both") {
		return (
			<div className={prevNextNav.prevNext__navigation}>
				{/* <div className="prev-next__navigation"> */}
				<Link href={props.propsInfos.route[0]} passHref>
					{/* <Link href={props.propsInfos.route[0]} className="prevbutton" passHref> */}
					<a href="replace" className={prevNextNav.prevbutton}>
						{/* <Link to={props.propsInfos.route[0]} className="prevbutton"> */}
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="angle-double-right"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								fill="currentColor"
								d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
							></path>
						</svg>
						<p className={prevNextNav.direction__btnName}>
							{props.propsInfos.btnName[0]}
						</p>
					</a>
				</Link>
				{props.propsInfos.devis ? (
					<a href="mailto:titonoart@gmail.com">
						<p className="subcreation__container--devis prev-next__navigation--devis">
							Demandez un devis
						</p>
					</a>
				) : (
					console.log("false")
				)}
				<Link href={props.propsInfos.route[1]} passHref>
					{/* <Link href={props.propsInfos.route[1]} className="nextbutton" passHref> */}
					<a href="replace" className={prevNextNav.nextbutton}>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="angle-double-right"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								fill="currentColor"
								d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
							></path>
						</svg>
						<p className={prevNextNav.direction__btnName}>
							{props.propsInfos.btnName[1]}
						</p>
					</a>
				</Link>
			</div>
		);
	} else if (props.propsInfos.direction === "next") {
		return (
			<div
				className={
					prevNextNav.prevNext__navigation + " " + prevNextNav.navigation__next
				}
			>
				{/* <div className="prev-next__navigation navigation--next"> */}
				<Link href={props.propsInfos.route} passHref>
					<a href="replace" className={prevNextNav.nextbutton}>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="angle-double-right"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								fill="currentColor"
								d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
							></path>
						</svg>
						<p className={prevNextNav.direction__btnName}>
							{props.propsInfos.btnName}
						</p>
					</a>
				</Link>
				{props.propsInfos.devis ? (
					<a href="mailto:titonoart@gmail.com">
						<p className="subcreation__container--devis prev-next__navigation--devis">
							Demandez un devis
						</p>
					</a>
				) : (
					console.log("false")
				)}
			</div>
		);
	}
};

export default PrevNextNav;
