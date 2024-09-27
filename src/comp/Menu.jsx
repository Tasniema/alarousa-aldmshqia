import React, { useState } from 'react';
import './Menu.css';
import translation from './translation';

const Menu = ({language}) => {

  const [selectedCategory, setSelectedCategory] = useState('oriental');

  const orientalImages = [
    { id: 1, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/2015%2C_Fair_Smaki_Regionow%2C_Poznan_%2829%29.JPG/276px-2015%2C_Fair_Smaki_Regionow%2C_Poznan_%2829%29.JPG", name: "Baqlawa", price: 100 },
    { id: 2, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/K%C3%BCnefe_from_Turkey.jpg/300px-K%C3%BCnefe_from_Turkey.jpg", name: "Kunefe", price: 100 },
    { id: 3, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/%D8%AD%D9%84%D8%A7%D9%88%D8%A9_%D8%A7%D9%84%D8%AC%D8%A8%D9%86_%D8%A7%D9%84%D8%AD%D9%85%D9%88%D9%8A%D8%A9.jpg/276px-%D8%AD%D9%84%D8%A7%D9%88%D8%A9_%D8%A7%D9%84%D8%AC%D8%A8%D9%86_%D8%A7%D9%84%D8%AD%D9%85%D9%88%D9%8A%D8%A9.jpg", name: "Halawet al Jibn", price: 100 },
    { id: 4, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Jalebi_-_Closeup_View_of_Jalebis.JPG/276px-Jalebi_-_Closeup_View_of_Jalebis.JPG", name: "Jalebi", price: 100 },
    { id: 5, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Umm_Ali.JPG/276px-Umm_Ali.JPG", name: "Umm Ali", price: 100 },
    { id: 6, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Tulumba.jpg/276px-Tulumba.jpg", name: "Tulumba", price: 100 },
  ];

  const westernImages = [
    { id: 1, src: "https://kitchen.sayidaty.net/uploads/small/85/8573c936f22de0e8e82579e8d28d73ce_w361_h361.jpg", name: "Brownie", price: 150 },
    { id: 2, src: "https://kitchen.sayidaty.net/uploads/small/9f/9fbf1b3dbad8e931d9a292371ad95689_w361_h361.jpg", name: "Cheesecake", price: 150 },
    { id: 3, src: "https://kitchen.sayidaty.net/uploads/small/ba/ba6e8c2b099cdb2a4a096c1a21fd1a56_w361_h361.jpg", name: "Lemon Cake", price: 150 },
    { id: 4, src: "https://kitchen.sayidaty.net/uploads/small/ce/ceaf69276c6560667af46deb92030f31_w361_h361.jpg",name: "strawberry cake" , price: 150 },
    { id: 5, src: "https://kitchen.sayidaty.net/uploads/small/3a/3a526a64647d77f3725b1a2211764a51_w361_h361.jpg", name: "Cupcake", price: 150 },
    { id: 6, src: "https://kitchen.sayidaty.net/uploads/small/1a/1a12cb4517ffcce3f215103d07c2bcb8_w361_h361.jpg",name: "Cake", price: 150 },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const displayedImages = selectedCategory === 'oriental' ? orientalImages : westernImages;

  return (
      <div className="menu">
      <h1>__ {translation[language].popularmenua}__</h1>
      <div className='oandw'>
        <h3 onClick={() => handleCategoryChange('oriental')}>{translation[language].orintal}</h3>
        <h3 onClick={() => handleCategoryChange('western')}>{translation[language].witren}</h3>
      </div>
      <div className='oriental'>
        {displayedImages.map(item => (
          <div key={item.id}>
            <img src={item.src} alt={item.name} />
            <span>{item.name}: {item.price} LE</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

