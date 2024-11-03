import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    };

    const decreaseQuantity = (id) => {
        setCart(prevCart => {
            return prevCart.map(pizza => {
                if (pizza.id === id) {
                    if (pizza.quantity > 1) {
                        return { ...pizza, quantity: pizza.quantity - 1 };
                    } else {
                        return null;1
                    }
                }
                return pizza;
            }).filter(pizza => pizza !== null); 
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
