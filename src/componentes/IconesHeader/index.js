import React, { Component } from 'react';
import styled from 'styled-components';
import perfil from '../../imagens/perfil.png';
import android from '../../imagens/android-studio.png'

const Icone = styled.li`
  margin-right: 20px;
  width: 25px;
`
const Icones = styled.ul`
  display: flex;
  align-items: center;
`
const icones = [perfil, android]

function IconesHeader() {
    return(
        <Icones>
            {icones.map((icone)=> (
              <Icone><img src={icone}></img></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader;