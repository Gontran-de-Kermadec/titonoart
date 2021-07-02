import Carousel from './Carousel';
import Contact from './Contact';
import colibri from '../images/colibri.svg';
import popup from '../images/popup.svg';

function Home() {
    return (
        <div>
            <Carousel />
            <p>Où retrouver nos créations</p>
            <div className="app-partenaire">
                <a href="https://www.colibri-spirit.com/" target='__blank'>
                    <img src={colibri} alt="logo"></img>
                    {/* <p>Colibri Spirit</p> */}
                </a>
                <a href="https://popupstory.fr/" target='__blank'>
                    <img src={popup} alt="logo"></img>
                    {/* <p>Popup Story</p> */}
                </a>
            </div>
            <Contact />
        </div>
    )
}

export default Home;