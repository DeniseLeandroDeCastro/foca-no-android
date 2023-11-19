import React, {Component} from 'react';
import styled from 'styled-components';
import imagemArtigo from '../../imagens/android_sdk.png';
import { Titulo } from '../Titulo';

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    margin-top: 16px;
    justify-content: space-around;
    width: 100%;
`
const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`
const Descricao = styled.p`
    max-width: 300px;
`
const ImgArtigo = styled.img`
    width: 150px;
`
const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    border-radius: 16px;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`
function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return(
       <Card>
             <div>
                <Titulo
                    fontSize="30px"
                    textAlign="left">
                        {titulo}Android SDK
                </Titulo>

                <Subtitulo>{subtitulo}Configuração do ambiente de desenvolvimento</Subtitulo>
                <Descricao>
                    {descricao}Para iniciar o desenvolvimento de applicações Android, é necessário instalar o Android Studio,
                    que contém o Android SDK, o emulador e todas as ferramentas necessárias para o desenvolvimento.<br/>
                    (Ref.: LECHETA, Ricardo F. Android Essencial com Kotlin)
                </Descricao>
            </div>
            <div>
                <ImgArtigo src={imagemArtigo}/>
                <Botao>Saiba mais</Botao>
            </div>
       </Card>
    )
}

export default CardRecomenda
