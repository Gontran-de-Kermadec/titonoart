import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Creation from "./components/Creation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Artiste from "./components/Artiste";
import Origin from "./components/about-subsections/Origin";
import Support from "./components/about-subsections/Support";
import Valeurs from "./components/about-subsections/Valeurs";
import Demarche from "./components/about-subsections/Demarche";
import Deco from "./components/creation-collections/Deco";
import Art from "./components/creation-collections/Art";
import Bar from "./components/creation-collections/Bar";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<main>
					<Route path="/" exact component={Home} />
					<Route path="/creation" exact component={Creation} />
					<Route path="/about" exact component={About} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/artiste" exact component={Artiste} />
					<Route path="/about/origin" exact component={Origin} />
					<Route path="/about/support" exact component={Support} />
					<Route path="/about/valeurs" exact component={Valeurs} />
					<Route path="/about/demarche" exact component={Demarche} />
					<Route path="/creation/deco" exact component={Deco} />
					<Route path="/creation/art" exact component={Art} />
					<Route path="/creation/bar" exact component={Bar} />
				</main>
			</Router>
		</div>
	);
}

export default App;
