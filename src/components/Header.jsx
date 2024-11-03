import React from 'react';
import Pizza from '../assets/img/pizza.png';
import '../assets/css/Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <img src={Pizza} className="pizza-image" alt="Pizza" />
            <div className="header-content">
                <h1>Pizzería Mamma Mía</h1>
                <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
                <hr className='hr-header'/>
            </div>
        </header>
    );
};

export default Header;