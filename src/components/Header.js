import "../style/Header.css";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
//import { useEffect } from "react";

function Header() {
	const toggleMenu = () => {
		document.querySelector(".mobile__menu").classList.toggle("visible");
	};
	// const changePage = (e) => {
	// 	//console.log(e.currentTarget.classList);
	// 	document.querySelector(".mobile__menu").classList.toggle("visible");
	// };
	// useEffect(() => {
	// 	function handleMenu() {
	// 		document.
	// 	}
	// });
	// const stopEvent = (e) => {
	// 	e.stopPropagation();
	// };
	return (
		<div>
			<header>
				<div className="header-flex">
					<Link to="/" className="header__logo">
						<img src={Logo} alt="Logo" />
					</Link>
					<nav className="large-screen-menu">
						<ul>
							<Link to="/creation">
								<li>Créations</li>
							</Link>
							<Link to="/about">
								<li>À propos</li>
							</Link>
							<Link to="/robin">
								<li>Artiste</li>
							</Link>
							<Link to="/contact">
								<li>Contact</li>
							</Link>
						</ul>
					</nav>
					{/* <div className="xs-screen-menu" onClick={(e) => toggleMenu(e)}>
						<div className="xs-menu-title">
							Menu
							<svg
								className="arrow"
								xmlns="http://www.w3.org/2000/svg"
								data-name="Layer 1"
								viewBox="0 0 100 100"
								x="0px"
								y="0px"
							>
								<polygon
									points="36.66 18.63 33.12 22.17 60.21 49.26 33.34 76.13 36.88 79.67 63.77 52.77 67.4 49.37 36.66 18.63"
									fill="#000"
									stroke="#fff"
								/>
							</svg>
						</div>
						<nav>
							<ul className="xs-screen-list">
								<Link to="/creation">
									<li>Créations</li>
								</Link>
								<Link to="/about">
									<li>À propos</li>
								</Link>
								<Link to="/robin">
									<li>Artiste</li>
								</Link>
								<Link to="/contact">
									<li>Contact</li>
								</Link>
							</ul>
						</nav>
					</div> */}
				</div>
				<p>"Fût de chêne français transformé en véritable oeuvre d'art"</p>
				<div className="mobile__version">
					<Link to="/" className="header__logo">
						{/* <img src={Logo} alt="Logo" /> */}
						<svg
							className="mobile__svg"
							version="1.0"
							xmlns="http://www.w3.org/2000/svg"
							//width="3508.000000pt"
							width="100"
							// height="2480.000000pt"
							height="100"
							// viewBox="0 0 3508.000000 2480.000000"
							viewBox="0 0 2200 1500"
							preserveAspectRatio="xMidYMid meet"
						>
							<g
								//transform="translate(0.000000,2480.000000) scale(0.1,-0.1)"
								transform="translate(-650,2480) scale(0.1,-0.14)"
								fill="#000000"
								stroke="none"
							>
								<path
									d="M17250 17397 c-3 -3 -118 -10 -255 -16 -138 -6 -295 -16 -350 -21
-55 -6 -172 -18 -260 -26 -88 -8 -209 -21 -270 -28 -60 -8 -166 -21 -235 -30
-69 -9 -143 -20 -165 -25 -22 -6 -58 -13 -80 -16 -212 -30 -646 -120 -920
-190 -77 -20 -167 -42 -200 -51 -33 -8 -73 -19 -90 -25 -16 -5 -70 -21 -120
-35 -49 -14 -119 -35 -155 -46 -36 -11 -81 -24 -100 -30 -197 -57 -875 -303
-907 -330 -10 -8 -13 -80 -13 -299 0 -159 4 -289 8 -289 4 0 53 18 107 41 237
97 743 276 925 327 19 6 96 28 171 51 347 103 736 195 1074 256 44 7 104 19
134 24 108 22 113 13 43 -68 -95 -111 -219 -286 -355 -504 -352 -560 -613
-1183 -797 -1902 -85 -329 -154 -746 -180 -1075 -5 -69 -14 -188 -21 -265 -13
-162 -8 -593 10 -830 17 -227 59 -537 104 -770 145 -745 468 -1508 934 -2204
46 -68 83 -127 83 -132 0 -5 90 -9 200 -9 l200 0 0 34 c0 23 -13 53 -43 97
-42 61 -49 67 -168 126 -262 132 -440 344 -510 608 -24 89 -31 298 -15 412 8
57 6 69 -22 140 -141 362 -254 777 -307 1128 -9 55 -18 107 -20 116 -7 21 -35
277 -45 414 -11 143 -11 700 0 835 34 417 87 722 200 1145 31 119 134 421 197
580 67 170 240 528 330 685 330 571 746 1059 1240 1457 167 134 152 127 287
135 67 4 324 10 571 14 454 7 536 4 1087 -33 l247 -17 22 30 c49 65 149 152
215 186 122 63 165 73 304 72 109 0 134 -4 192 -26 162 -61 282 -166 346 -301
22 -45 44 -94 50 -109 8 -20 23 -30 64 -41 59 -17 286 -53 292 -46 4 4 11 132
22 390 8 177 12 167 -76 185 -30 7 -100 22 -155 34 -195 42 -258 54 -555 106
-230 39 -530 79 -745 99 -88 8 -209 19 -270 25 -203 20 -507 32 -880 37 -203
3 -372 2 -375 0z"
								/>
								<path
									d="M20987 16833 c-3 -5 -8 -775 -12 -1713 -3 -938 -10 -2038 -15 -2445
-6 -407 -10 -1189 -10 -1737 l-1 -998 25 -47 c37 -75 50 -155 50 -308 -1 -153
-17 -238 -58 -310 -21 -36 -24 -57 -30 -217 l-7 -178 259 0 259 0 7 53 c3 28
6 101 6 162 0 107 -1 111 -39 190 -82 169 -83 452 -1 616 17 35 35 68 40 74
12 15 43 4478 40 5715 0 37 24 -23 98 -250 130 -394 187 -581 274 -900 116
-429 255 -1045 324 -1439 102 -584 144 -893 213 -1571 69 -666 98 -1867 62
-2485 -3 -60 -5 -122 -3 -138 l3 -27 227 2 226 3 6 30 c4 17 63 143 131 280
69 138 137 277 151 310 15 33 43 96 63 140 145 321 345 858 440 1180 15 50 30
101 35 115 5 14 20 68 35 120 14 52 29 109 34 125 30 99 135 549 156 670 8 44
24 130 35 190 37 195 84 522 105 734 8 79 17 158 20 175 3 17 13 150 22 296
31 475 17 1311 -27 1645 -5 39 -12 102 -15 140 -9 100 -44 370 -57 437 -6 32
-16 62 -22 66 -34 26 -266 135 -273 128 -4 -4 24 -266 33 -306 3 -13 23 -39
43 -57 52 -44 120 -160 143 -241 34 -124 19 -281 -38 -394 -13 -27 -49 -77
-79 -112 l-54 -64 -11 -254 c-20 -503 -80 -1073 -150 -1423 -27 -137 -73 -376
-81 -419 -4 -26 -13 -62 -18 -80 -6 -17 -18 -62 -26 -101 -74 -329 -239 -880
-351 -1172 -138 -361 -181 -468 -260 -638 l-28 -60 -12 150 c-29 351 -44 522
-49 550 -3 17 -12 95 -20 175 -22 221 -37 335 -95 750 -14 95 -76 480 -95 580
-65 352 -101 533 -161 805 -24 110 -46 209 -49 220 -169 708 -292 1148 -479
1710 -144 432 -285 809 -434 1162 -17 39 -54 117 -83 173 -62 118 -82 133
-219 170 -47 12 -102 29 -123 36 -42 15 -73 18 -80 7z m1982 -6963 c32 -16 71
-75 78 -114 18 -114 -65 -204 -180 -193 -158 14 -197 234 -54 307 44 22 115
23 156 0z"
								/>
								<path
									d="M11758 15857 c-54 -34 -139 -86 -190 -116 -90 -52 -550 -354 -673
-442 -724 -514 -1377 -1109 -1931 -1759 -189 -222 -315 -383 -493 -630 -641
-889 -1114 -1829 -1426 -2834 -78 -252 -169 -600 -211 -801 -35 -170 -73 -372
-74 -387 0 -5 65 -8 145 -8 l145 0 0 25 c0 37 20 157 45 271 19 84 21 111 13
160 -13 78 -3 331 16 419 54 247 163 457 329 631 63 68 73 84 158 275 456
1026 1068 1941 1858 2774 120 128 402 404 424 416 18 10 19 -5 13 -483 -4
-271 -11 -664 -16 -873 -5 -209 -12 -679 -15 -1045 -3 -366 -8 -692 -10 -725
-3 -33 -9 -382 -15 -775 -5 -393 -13 -795 -16 -892 l-7 -178 267 0 266 0 0 28
c0 15 2 275 5 577 2 303 6 584 9 625 3 41 10 509 16 1040 6 531 15 1125 20
1320 5 195 13 691 16 1102 4 411 10 750 13 755 17 24 371 296 546 420 55 39
183 126 285 195 102 68 212 142 245 165 95 64 183 117 272 164 l83 44 2 263
c1 144 2 279 3 299 0 20 -4 38 -10 39 -5 2 -54 -25 -107 -59z"
								/>
								<path
									d="M17629 14330 c-552 -35 -1110 -269 -1551 -650 -133 -114 -205 -190
-333 -349 -124 -155 -208 -289 -310 -496 -102 -208 -146 -324 -196 -523 -65
-258 -89 -449 -88 -702 1 -598 186 -1152 547 -1640 106 -143 379 -419 517
-521 194 -145 389 -257 600 -345 128 -53 368 -125 480 -145 28 -4 91 -15 140
-24 298 -52 713 -32 1016 49 383 103 731 276 1013 504 235 190 480 471 628
721 143 243 223 438 312 761 45 166 76 433 76 660 0 361 -58 658 -201 1035
-36 96 -164 340 -236 449 -157 240 -366 473 -573 637 -434 345 -937 542 -1484
579 -154 11 -185 11 -357 0z m486 -370 c236 -33 439 -90 627 -177 610 -279
1057 -774 1266 -1404 87 -262 122 -482 122 -759 0 -384 -75 -708 -245 -1055
-346 -709 -1014 -1187 -1795 -1285 -198 -25 -355 -25 -553 0 -672 85 -1263
453 -1639 1019 -251 379 -382 793 -395 1251 -9 310 31 574 128 857 234 680
779 1223 1459 1455 322 109 691 145 1025 98z"
								/>
								<path
									d="M12265 13708 c-76 -10 -146 -32 -210 -65 -80 -41 -83 -46 -73 -101 5
-26 13 -72 18 -102 4 -30 20 -120 35 -200 14 -80 32 -183 40 -229 8 -47 18
-88 22 -92 9 -8 241 -15 378 -11 l91 2 12 58 c55 274 76 379 88 452 7 47 18
105 24 130 10 41 9 46 -12 62 -45 35 -131 70 -206 83 -117 21 -142 22 -207 13z"
								/>
								<path
									d="M12092 12698 c-9 -9 -12 -71 -12 -217 l0 -205 25 -21 c32 -26 53
-107 66 -260 16 -180 -4 -305 -64 -408 l-25 -42 -7 -615 c-3 -338 -7 -937 -8
-1330 l-2 -715 246 -3 246 -2 6 57 c3 32 6 573 6 1203 1 630 4 1201 7 1270 6
120 6 128 -18 175 -52 103 -62 157 -61 340 0 146 4 180 23 245 13 44 32 84 46
97 24 22 24 24 24 233 l0 210 -243 0 c-176 0 -246 -3 -255 -12z"
								/>
								<path
									d="M25840 12514 c-203 -30 -355 -77 -535 -164 -468 -226 -806 -636 -948
-1150 -81 -291 -80 -657 2 -961 93 -345 310 -680 591 -914 205 -170 453 -292
760 -371 99 -26 118 -27 340 -28 256 0 292 4 485 60 320 94 560 238 797 480
337 345 521 820 505 1301 -8 226 -32 363 -99 558 -214 627 -769 1091 -1418
1186 -120 18 -373 19 -480 3z m495 -343 c295 -64 540 -196 746 -403 205 -205
333 -442 401 -743 32 -145 32 -422 -1 -580 -53 -259 -146 -460 -305 -655 -206
-255 -476 -424 -801 -501 -89 -21 -123 -24 -315 -24 -176 0 -229 3 -290 19
-133 33 -203 58 -325 116 -395 190 -679 549 -784 994 -47 196 -47 487 0 659
10 39 26 97 34 127 94 349 416 717 769 880 146 68 331 121 466 134 94 9 316
-4 405 -23z"
								/>
								<path
									d="M6522 8532 c-9 -6 -12 -36 -10 -113 l3 -104 10695 0 10695 0 3 104
c2 77 -1 107 -10 113 -17 10 -21359 10 -21376 0z"
								/>
								<path
									d="M6517 8003 c-4 -3 -7 -397 -7 -874 0 -781 2 -867 16 -873 9 -3 314
-6 679 -6 l664 0 113 73 c831 541 2280 926 3973 1056 493 39 691 45 1295 45
602 0 795 -6 1295 -45 1696 -129 3149 -517 3988 -1065 l98 -64 4627 0 c2545 0
4633 4 4640 8 10 7 12 189 10 878 l-3 869 -10691 3 c-5880 1 -10694 -1 -10697
-5z m18788 -193 c115 -13 192 -34 280 -76 96 -45 157 -101 196 -179 30 -61 31
-70 27 -153 -3 -73 -9 -96 -30 -133 -71 -121 -238 -212 -435 -237 l-55 -7 293
-284 c162 -156 296 -287 297 -293 4 -10 -72 -3 -153 14 -27 5 -82 25 -121 44
-64 30 -102 63 -338 291 -196 189 -266 263 -266 280 0 41 39 55 178 64 175 10
270 42 352 115 104 94 90 256 -29 338 -98 68 -218 86 -573 86 l-258 0 -2 -617
-3 -618 -102 -3 -103 -3 0 691 0 690 378 0 c207 0 418 -5 467 -10z m2030 -1
c46 -13 115 -77 115 -108 0 -21 -1 -21 -325 -21 l-325 0 0 -620 0 -621 -102 3
-103 3 -3 618 -2 617 -248 0 c-139 0 -263 5 -284 10 -50 14 -108 70 -108 104
l0 26 673 0 c459 0 685 -4 712 -11z m-3585 -671 c260 -370 474 -678 477 -685
4 -10 -19 -13 -105 -13 l-111 0 -122 175 -123 175 -368 0 c-203 0 -368 4 -368
9 0 15 90 92 128 109 30 13 84 17 270 22 l233 5 -193 277 c-106 153 -195 277
-198 278 -3 0 -171 -236 -374 -525 l-367 -525 -111 0 c-87 0 -109 3 -105 13 9
23 951 1357 958 1357 4 0 220 -302 479 -672z"
								/>
							</g>
						</svg>
					</Link>
					<div className="mobile__lines" onClick={() => toggleMenu()}>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
					</div>
					<div className="mobile__menu">
						<nav className="mobile__menu--nav">
							<ul>
								<Link to="/creation">
									<li onClick={() => toggleMenu()}>Créations</li>
								</Link>
								<Link to="/about">
									<li onClick={() => toggleMenu()}>À propos</li>
								</Link>
								<Link to="/robin">
									<li onClick={() => toggleMenu()}>Artiste</li>
								</Link>
								<Link to="/contact">
									<li onClick={() => toggleMenu()}>Contact</li>
								</Link>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
