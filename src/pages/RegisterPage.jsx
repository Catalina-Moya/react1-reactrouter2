import React, { useState } from 'react'
import '../assets/css/RegisterPage.css';


function RegisterPage() {

    const [inputEmail, setInputEmail] = useState ('')
    const [inputContraseña, setInputContraseña] = useState ('')
    const [inputContraseña2, setInputContraseña2] = useState ('')


    const handleInputEmail = (evento) => {
        setInputEmail (evento.target.value);
    }

    const handleInputContraseña = (evento) => {
        setInputContraseña (evento.target.value);
    }

    const handleInputContraseña2 = (evento) => {
        setInputContraseña2 (evento.target.value);
    }

    const handleForm = (evento) => {
        evento.preventDefault()

        if (!inputEmail.length || !inputContraseña.length || !inputContraseña2.length) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (!inputEmail.includes ("@")) {
            alert ("No es un correo válido.")
            return
        }
        if (inputContraseña.length < 6 ) {
            alert ("La contraseña debe tener al menos 6 caracteres.")
            return
        }
        if (inputContraseña!== inputContraseña2) {
            alert ("Las contraseñas no coinciden.")
            return
        } 
        else {
            alert ("Registro exitoso.")
        }
    }


    return (
        <div className='register-container'>
        <div className='register-content'>
            <h1>Registro</h1>
            <hr />
            <form onSubmit={handleForm}>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" onChange={handleInputEmail} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputContraseña" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="inputContraseña" onChange={handleInputContraseña} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputContraseña2" className="form-label">Confirmar Contraseña</label>
                    <input type="password" className="form-control" id="inputContraseña2" onChange={handleInputContraseña2} />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <p className='register-login'>
                ¿Ya tienes una cuenta?
            </p>
            <a href="/login" className="btn btn-primary">
                Inicia sesión aquí
            </a>
        </div>
    </div>
    )
}

export default RegisterPage;
