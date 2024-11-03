import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';
import Pizza from './pages/Pizza';
import Home from './pages/Home';
import Cart from './pages/Cart';
import RutaProtegida from './components/RutaProtegida';
import RutaPrivada from './components/RutaPrivada';
import { UserProvider, useUser } from './components/UserContext';
import './App.css';

function App() {
    return (
        <UserProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<RutaPrivada><LoginPage /></RutaPrivada>} />
                <Route path="/register" element={<RutaPrivada><RegisterPage /></RutaPrivada>} />
                <Route path="/profile"element={<RutaProtegida><Profile /></RutaProtegida>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/api/pizzas/:id" element={<Pizza />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </UserProvider>
    );
}

export default App;
