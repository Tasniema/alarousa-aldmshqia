import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faShoppingCart, faClock } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import translation from './translation';


const Service = ({language}) => {
  return (
    <div className='service'>
    <span>__ {translation[language].ourservice} __</span>
    <ScrollAnimation animateIn='bombRight'>
    <div className='cards'>
      <div className='Card'>
        <h1><FontAwesomeIcon icon={faUtensils} /> {translation[language].quality}</h1>
        <p>{translation[language].qualityp}</p>
      </div>
      <div className='Card'>
        <h1><FontAwesomeIcon icon={faShoppingCart} /> {translation[language].online}</h1>
        <p>{translation[language].onlinep}</p>
      </div>
      <div className='Card'>
        <h1><FontAwesomeIcon icon={faClock} /> {translation[language].timesrv}</h1>
        <p>{translation[language].timeServP}</p>
      </div>
    </div>
    </ScrollAnimation>
  </div>
  );
}

export default Service;
