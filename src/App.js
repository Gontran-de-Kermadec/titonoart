import Header from "./components/Header";
import Creation from "./components/Creation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Robin from "./components/Robin";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Origin from "./components/about-subsections/Origin";
import Support from "./components/about-subsections/Support";
import Valeurs from "./components/about-subsections/Valeurs";
import Demarche from "./components/about-subsections/Demarche";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/creation" exact component={Creation} />
				<Route path="/about" exact component={About} />
				<Route path="/contact" exact component={Contact} />
				<Route path="/robin" exact component={Robin} />
				<Route path="/about/origin" exact component={Origin} />
				<Route path="/about/support" exact component={Support} />
				<Route path="/about/valeurs" exact component={Valeurs} />
				<Route path="/about/demarche" exact component={Demarche} />
			</Router>
		</div>
	);
}

export default App;
