// import "../style/Footer.css";
import footerStyle from "../style/Footer.module.css";
// import { Link } from "react-router-dom";
import Link from "next/link";

const Footer = () => {
	return (
		// <div className="footer">
		<div className={footerStyle.footer}>
			<div className={footerStyle.footer__flex}>
				{/* <div className="footer__flex"> */}
				<div className={footerStyle.footer__legals}>
					{/* <div className="footer__legals"> */}
					<Link href="/mentions-legales" passHref>
						{/* <Link href="/mentions-legales" className="mentions" passHref> */}
						<a href="replace" className={footerStyle.mentions}>
							Mentions légales
							<span className={footerStyle.footer__underline}></span>
							{/* <span className="footer__underline"></span> */}
						</a>
					</Link>
				</div>
				<div className={footerStyle.footer__socials}>
					{/* <div className="footer__socials"> */}
					<p>
						Contactez-nous:{" "}
						<a href="mailto:titonoart@gmail.com">titonoart@gmail.com</a>
					</p>
					{/* <a
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
					</a> */}
				</div>
			</div>
		</div>
	);
};
export default Footer;
