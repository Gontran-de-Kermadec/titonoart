import Header from './components/Header';
import Creation from './components/Creation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Robin from './components/Robin';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path='/' exact component={Home}/>
        <Route path='/creation' exact component={Creation}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/robin' exact component={Robin}/>
      </Router>
    </div>
  );
}

export default App;
