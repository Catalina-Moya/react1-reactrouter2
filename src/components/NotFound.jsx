import React from 'react'
import '../assets/css/NotFound.css'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="notfound-container">
            <div className='notfound-content'>
                <h2>4🍕4</h2>
                <h4>¡Oops! Página no encontrada</h4>
                <p>Lo sentimos, pero la página que estás buscando no está disponible. Quizás el enlace esté roto o nunca existió. Vuelve a nuestra página de inicio.</p>
                <Link to="/" className="btn-link">Volver a Inicio</Link>
            </div>
        </div>
    )
}

export default NotFound
