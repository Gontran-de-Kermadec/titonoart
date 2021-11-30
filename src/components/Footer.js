import "../style/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__flex">
				<div className="footer__legals">
					<Link to="/mentions-legales">
						Mentions légales
						<span className="footer__underline"></span>
					</Link>
				</div>
				<div className="footer__socials">
					<a
						href="https://www.facebook.com/titonoart"
						target="_blank"
						rel="noreferrer"
					>
						Facebook
						<span className="footer__underline"></span>
					</a>
					&nbsp;&nbsp;&nbsp;
					<a
						href="https://www.instagram.com/titonoart/"
						target="_blank"
						rel="noreferrer"
					>
						Instagram
						<span className="footer__underline"></span>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Footer;
