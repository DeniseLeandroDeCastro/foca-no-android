import React, { Component }  from 'react';
import logo from '../../imagens/logo-blog.png';
import './estilo.css'

function Logo() {
    return (
        <div className='logo'>
            <img 
                src={logo} 
                alt='logo' 
                className='logo-img'>
            </img>
        </div>
    )
}

export default Logo