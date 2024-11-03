import React from 'react';

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
    return (
        <div className="pizza-item">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>Descripcion: {desc}</p>
            <p className="pizza-precio"><strong>Precio: ${price}</strong></p>
            <ul>
                <li>Ingredientes: {ingredients.join(', ')}</li>
            </ul>
        </div>
    );
};

export default CardPizza;

