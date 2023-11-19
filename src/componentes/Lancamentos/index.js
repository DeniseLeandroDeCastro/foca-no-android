import React, { Component } from 'react';
import styled from 'styled-components';
import CardRecomenda from '../CardRecomenda/index.js';
import { Titulo } from '../Titulo/index.js';
import imagemArtigo from '../../imagens/android-compose.png';


const LancamentosContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosArtigosContainer = styled.div`
    margin-top: 10px;
    display: flex;
    widht: 100%;
    justify-content: center;
    cursor: pointer;
`
function Lancamentos() {
    return(
        <LancamentosContainer>
            <Titulo 
                color="#EB9B00"
                fontSize="50px">Novos Artigos
            </Titulo>

            <NovosArtigosContainer/>
            <CardRecomenda/>
        </LancamentosContainer>
    )
}

export default Lancamentos