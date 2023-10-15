import React, { Component } from 'react';
import './estilo.css'

import perfil from '../../imagens/perfil.png';
import android from '../../imagens/android-studio.png'

const icones = [perfil, android]

function IconesHeader() {
    return(
        <ul className='icones'>
            {icones.map((icone)=> (
              <li className='icone'><img src={icone}></img></li>
            ))}
          </ul>
    )
}

export default IconesHeader