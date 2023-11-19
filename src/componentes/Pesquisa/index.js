import React, { Component, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import { useState } from 'react';
import { getArtigos } from '../../servicos/artigos'

const PesquisaContainer = styled.section`
    background-image: linear-gradiente(90deg, #002F52 35%, #326589 165%);
    text-align: center;
    padding: 40px 0;
    height: 270px;
    widht: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    widht: 100%;
`

const Subtitulo = styled.h3`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Pesquisa() {

    const [artigosPesquisados, setArtigosPesquisados] = useState([])
    const [artigos, setArtigos] = useState([])

    useEffect( () => {
        const artigosDaAPI = getArtigos()
        setArtigos(artigosDaAPI)
    }, [artigos] )

    return(
       <PesquisaContainer>
            <Titulo>Encontre o artigo que deseja ler.</Titulo>

            <Input 
            placeholder='Faça aqui a sua busca'
            onBlur={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = artigos.filter(artigo => artigo.nome.includes(textoDigitado))
                setArtigosPesquisados(resultadoPesquisa)
            }}/>

            {artigosPesquisados.map(artigo => (
                <div>
                    <p>{artigo.nome}</p>
                    <img src={artigo.src}/>
                </div>  
            ))}
       </PesquisaContainer>
    )
}

export default Pesquisa;