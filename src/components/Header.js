import '../style/Header.css';
import Logo from '../images/logo.svg';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <div className="header-flex">
            <Link to='/' className="header__logo">
              <img src={Logo} alt='Logo' />
            </Link>
            <nav>
                <ul>
                    <Link to='/creation'>
                    <li>Nos Créations</li>
                    </Link>
                    <Link to='/about'>
                    <li>À propos</li>
                    </Link>
                    <Link to='/robin'>
                      <li>Robin Lepoutre</li>
                    </Link>
                    <Link to='/contact'>
                      <li>Contact</li>
                    </Link>     
                </ul>
            </nav>
        </div>
        <p>"Fût de chêne français transformé en véritable oeuvre d'art"</p>
      </header>
    </div>
  );
}

export default Header;