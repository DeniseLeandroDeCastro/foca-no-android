import React, { Component } from 'react';
import Pesquisa from '../componentes/Pesquisa';
import Lancamentos from '../componentes/Lancamentos';
import styled from 'styled-components';

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  }
  
  li {
    list-style: none;
`

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Pesquisa/>
        <Lancamentos/>
      </HomeContainer>
    );
  }
}

export default Home;
