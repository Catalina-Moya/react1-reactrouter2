import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CardPizza from '../components/CardPizza'; 
import '../assets/css/Pizza.css';

const Pizza = () => {
    const { id } = useParams(); 
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setPizza(data);
                } else {
                    console.error('Error al obtener la pizza');
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        };

        fetchPizza();
    }, [id]);

    if (!pizza) return <div>Pizza no encontrada.</div>;

    return (
        <div className="pizza-content-dos">
            <h2>Pizza: {pizza.name}</h2> 
            <CardPizza 
                id={pizza.id} 
                name={pizza.name} 
                price={pizza.price} 
                ingredients={pizza.ingredients} 
                img={pizza.img} 
                desc={pizza.desc} 
            />
            <Link to="/" className="btn-link">Volver a Inicio</Link>
        </div>
    );
};

export default Pizza;

