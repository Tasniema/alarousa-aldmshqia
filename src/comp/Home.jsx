import React from 'react';
import './Home.css';
import translation from './translation';

const Home = ({language}) => {
  return (
    <div className='Home'>
     <div className='rightSide'>
       <h1>{translation[language].Head}</h1>
       <h3>{translation[language].HomeText}</h3>
       <button>{translation[language].aboutText}</button>
     </div>
     <img src='https://tse3.mm.bing.net/th?id=OIP.5JgQ-EPl8iOQ55Be5XWuRwHaFd&pid=Api&P=0&h=220' alt=''></img>
    </div>
  );
}

export default Home;
