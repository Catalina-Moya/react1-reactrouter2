import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext'; 

const RutaPrivada = ({ children }) => {
    const { token } = useUser(); 
    return !token ? children : <Navigate to="/" />;
};

export default RutaPrivada;
