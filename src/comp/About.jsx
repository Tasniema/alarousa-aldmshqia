import React from 'react';
import './About.css';
import ScrollAnimation from 'react-animate-on-scroll';
import translation from './translation';

const About = ({language}) => {
  return (
    <div className='About'>
      <ScrollAnimation animateIn='custom-slide-in-left'>
    <div className='images'>
        <div className='image'>
          <img src='https://tse1.mm.bing.net/th?id=OIP.tGA3qyc0RhI3KVpoSoqy6AHaFj&pid=Api&P=0&h=220' alt='' className='overall'></img>
          <img src='https://tse1.mm.bing.net/th?id=OIP.Q-11x2oCSLYjDGMYWRT5_wHaEo&pid=Api&P=0&h=220' alt='' className='half right'></img>
        </div>
        <div className='image'>
          <img src='https://tse4.mm.bing.net/th?id=OIP.RgrFdfkHIebu8jyaQJbpCQHaE7&pid=Api&P=0&h=220' alt='' className='half left'></img>
          <img src='https://tse1.mm.bing.net/th?id=OIP.Q2mVok2G7Of91Ke3sKxLEgHaHa&pid=Api&P=0&h=220' alt='' className='overall'></img>
        </div>
    </div>
    </ScrollAnimation>

<div className='AboutUsexp'>
<ScrollAnimation animateIn='custom-slide-in-right'>
        <div className='aboutUs'>
          <span>__ {translation[language].AboutUs} __</span>
          <h1>{translation[language].welcome}</h1>
          <p>{translation[language].aboutp1} </p>
          <p>{translation[language].aboutp2}</p>
        </div>
      <div className='exper'>
      <div className='ten'>10</div>
            <p>{language === 'en' ? 'years of' : 'سنوات من'}</p>
            <span>{language === 'en' ? 'experience' : 'الخبرة'}</span>
      </div>
      </ScrollAnimation>
</div>
    </div>
  );
}

export default About;
