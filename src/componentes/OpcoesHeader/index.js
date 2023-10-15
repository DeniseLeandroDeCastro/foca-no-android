import React, { Component } from 'react';
import './estilo.css'
const textoOpcoes = ['ARTIGOS', 'CATEGORIAS', 'FAVORITOS']

function OpcoesHeader() {
    return(
        <ul className='opcoes'>
            {textoOpcoes.map((texto) => (<li className='opcao'><p>{texto}</p></li>))}
        </ul>
    )
}

export default OpcoesHeader