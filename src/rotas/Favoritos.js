import React, { Component } from 'react';
import Pesquisa from '../componentes/Pesquisa';
import styled from 'styled-components';

const FavoritosContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  }
  
  li {
    list-style: none;
`

class Favoritos extends Component {
  render() {
    return (
      <FavoritosContainer>
        <Pesquisa/>
      </FavoritosContainer>
    );
  }
}

export default Favoritos;
