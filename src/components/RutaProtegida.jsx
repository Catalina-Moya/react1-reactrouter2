import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext'; 

const RutaProtegida = ({ children }) => {
    const { token } = useUser(); 
    return token ? children : <Navigate to="/login" />;
};

export default RutaProtegida;
