import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { CartProvider } from './components/CartContext';
import { UserProvider } from './components/UserContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <UserProvider> 
        <CartProvider>
            <Router>
                <App />
            </Router>
        </CartProvider>
    </UserProvider>
);
