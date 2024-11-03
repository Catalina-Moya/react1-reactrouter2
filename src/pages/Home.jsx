import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useCart } from '../components/CartContext';
import '../assets/css/Home.css';

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas');
                if (!response.ok) {
                    throw new Error('Error al obtener las pizzas');
                }
                const data = await response.json();
                setPizzas(data);
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        };

        fetchPizzas();
    }, []);

    return (
        <div>
            <Header />
            <div className="pizza-list">
                <h2 className='nuestras-pizzas'>Nuestras Pizzas</h2>
                <div className="pizza-items">
                    {pizzas.length > 0 ? (
                        pizzas.map((pizza) => (
                            <div key={pizza.id} className="pizza-item">
                                <img src={pizza.img} alt={pizza.name} />
                                <h3>{pizza.name}</h3>
                                <hr />
                                <p> Descripcion: {pizza.desc}</p>
                                <p className="pizza-precio"><strong>Precio: ${pizza.price}</strong></p>
                                <ul>
                                    <li>Ingredientes: {pizza.ingredients.join(', ')}</li>
                                </ul>
                                <button onClick={() => addToCart({ ...pizza, quantity: 1 })}>
                                    Añadir al carrito
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No hay pizzas disponibles.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;

