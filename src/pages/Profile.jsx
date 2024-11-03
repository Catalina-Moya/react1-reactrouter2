import React from 'react'
import '../assets/css/Profile.css';
import profileImage from '../assets/img/user.webp';


function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-content'>
                <div className='p-background'></div>
                <div className='profile'>
                <img src={profileImage} alt="Perfil" className='profile-img' />
                    <div className='profile-tittle'>Nombre del usuario</div>
                    <div className='profile-p'>
                        <p>usuariocorreoejemplo.gmail.com</p>
                    </div>
                    <div className='btn-ptofile'>
                        <a href="">Cerrar sesión</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Profile
