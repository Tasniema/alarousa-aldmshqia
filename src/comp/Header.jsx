import React ,{useState} from 'react';
import { Link, Element } from 'react-scroll';
import './Headr.css';
import Home from '../comp/Home';
import Service from '../comp/Service';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import translation from './translation';

const Header = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ar' : 'en'));
  };

  React.useEffect(() => {
    document.body.classList.toggle('arabic', language === 'ar');
  }, [language]);

  return (
    <div>
    <header className="header">
      <h1 className='logo'>{language === 'en' ? 'Al-Arusa Al-Dimashqiyya' : 'العروسة الدمشقية'}</h1>
      <ul className="nav">
        <li>
          <Link
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            duration={500}
            className='home'
          >
            {translation[language].home}
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            {translation[language].about}
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            duration={500}
          >
            {translation[language].service}
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
          >
            {translation[language].menu}
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            {translation[language].contact}
          </Link>
        </li>
      </ul>
      <button onClick={toggleLanguage} className="language-toggle">
        {language === 'en' ? 'Ar' : 'En'}
      </button>
    </header>

    <Element name="home">
      <Home language={language} />
    </Element>

    <Element name="about">
      <About language={language} />
    </Element>

    <Element name="service">
      <Service language={language} />
    </Element>

    <Element name="menu">
      <Menu language={language} />
    </Element>

    <Element name="contact">
      <Contact language={language} />
    </Element>
  </div>
  );
}

export default Header;
