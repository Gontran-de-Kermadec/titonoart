import voilier from '../images/voilier.jpg';
import bar from '../images/bar.jpg';
import papillon from '../images/papillon1.jpg';
import '../style/Creation.css'

function Creation() {
    return (
        <div className="creation">
            <h1>Créations</h1>
            <div className="creation__container">
                <div className="single__creation">
                    <h2>Collection Robin</h2>
                    <figure>
                        <img src={voilier} alt="tonneau d'un voilier"></img>
                        <figcaption>Nuances sur la Baie #001</figcaption>
                    </figure>
                </div>
                <div className="single__creation">             
                    <h2>Collection Bar</h2>
                    <figure>
                        <img src={bar} alt="tonneau bar"></img>
                    </figure>
                </div>
                <div className="single__creation">
                    <h2>Collection Papillon</h2>
                    <figure>
                        <img src={papillon} alt="tonneau papillon"></img>
                    </figure>
                </div>
                <h2>Collection Pirate</h2>
                <h2>Collection Lotus</h2>
            </div>
        </div>
    )
}

export default Creation;