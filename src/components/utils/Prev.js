// import { Link } from "react-router-dom";
// import "../../style/utils/PrevNext.css";
import Link from "next/link";
import prevNext from "../../style/utils/PrevNext.module.css";
import prevNextNav from "../../style/PrevNextNav.module.css";
const Prev = (props) => {
	return (
		<div className={prevNextNav.prevbutton + " " + prevNext.prev__next}>
			{/* <div className="prev__button prev__next"> */}
			<Link href={props.route} passHref>
				{/* <Link href={props.route} className="prevbutton" passHref> */}
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
					<p>{props.btnName}</p>
				</a>
			</Link>
		</div>
	);
};
export default Prev;
