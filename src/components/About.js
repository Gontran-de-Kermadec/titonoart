import trou from '../images/voilier-trou.jpg';
import voilierAbout from '../images/voilier-about.jpg';
import fut from '../images/about-fut.jpg';
import support from '../images/about-support.jpg';
import plante from '../images/plante.png';
import '../style/About.css';


function About() {
    return (
        <div className='about'>
            <div className="about__child about__origin">
                <div className='about__origin--children about__origin--first'>
                    <h1>À Propos de<br/> Ti Tono Art</h1>
                    <p>Ti TONO ART propose des créations exclusives de styles, de motifs, et de couleurs variés sur une matière noble : le Bois !</p>
                    <p>Ces objets destinés à la décoration d’intérieur sont réalisés selon l’inspiration de l'artiste ou sur votre demande.</p>
                    <p>Touche exotique, atmosphère tropicale, l’art de vivre « à l’antillaise », esprit Caraïbes, couleurs vives...</p>
                    <p>La manière dont vous décorez votre habitation reflète votre personnalité.</p>
                    <p>Nous voulons que vous vous sentiez bien chez vous, dans un univers qui vous ressemble.</p>
                </div>
                <div className='about__origin--children about__origin--second'>
                    <p className="about__origin--bold">création unique & singulière peinte à la main avec inspiration qui illuminera votre intérieur.</p>
                    <div className='about__origin--trou'>
                        <img src={trou} alt="" id="about__origin--trou"/>
                    </div>
                    <p className='about__origin--title'>L'origine</p>
                    <p>Sur une idée originale de Delphine, évoluant dans le monde des spiritueux, et de Robin, artiste tatoueur et illustrateur, TI TONO ART aété créé en 2021.</p> 
                    <p>"Ce concept vous propose une Pièce de décoration que vous ne trouverez nulle par ailleurs".</p> 
                    <p>Consommer moins et consommer mieux, c’est possible avec le savoir-faire local.</p>
                </div>
                <div className='about__origin--children about__origin--third'>
                    <img src={voilierAbout} alt=""/>
                </div>
            </div> 
            <div className='about__child about__support'>
                <h3>Notre support :<br/> Le Fût de Chêne</h3>
                <p>Nous avons sélectionné une tonnellerie française familiale pour son travail de professionnels passionnés, son expérience dans le métier depuis 3 générations et le respect des matières et de l’environnement.</p>
                <p>Nous travaillons uniquement avec des barriques déjà utilisées pour le vieillissement du vin. Ce cépage n’a pas abîmé le bois. Il l’a Naturellement imprégné des ubtils arômes de fruits rouges et vanillés.</p>
                <div>
                    <img src={fut} alt=""/>
                </div>
                <p> Nous permettons à ce jeune fût de perdurer dans le temps et de devenir une pièce authentique, atypique et surtout unique.</p>
                <p>Afin de travailler de manière éthique, nous valorisons un métier « oublié » :le tonnelier.</p>
            </div>  
            <div className='about__child about__valeur'>
                    <div>
                        <img src={support} alt=""/>
                    </div>
                    <h3>Nos valeurs :<br/> convictions</h3>
                    <p>L'HUMAIN</p>
                    <p>Toujours soucieux d’un excellent relationnel, nous favorisons les échanges humain et de proximité.</p>
                    <p>LA PASSION</p>
                    <p>Cette activité est exercée en plus de nos professions respectives. Nous la vivons donc par amour de l’art.</p>
                    <p>LA PERSONNALISATION</p>
                    <p>Nous proposons un produit à caractère unique.</p>
                    <p>L'ENVIRONNEMENT</p>
                    <p>« Créer » veut aussi parfois dire « recycler », la préservation de l’environnement est essentielle.Notre façon de consommer peut être plus qualitative et durable.</p>
                    <div>
                        <img src={support} alt=""/>
                    </div>
            </div>
            <div className="about__child about__demarche">
                    <h3>Notre démarche :Eco - responsable</h3>
                    <p>Le bois est la matière première de nos barriques. Les forêts sont les poumons indispensables de notre planète. Conscient de l’importance de la protection des forêts, Ti Tono Art s’engage auprès de REFOREST'ACTION.</p>
                    <p>1 COMMANDE TONNEAU 225L DÉCORÉ = 1 ARBRE PLANTé</p>
                    <div>
                        <img src={plante} alt=""/>
                    </div>
            </div>
        </div>
    )
}

export default About;