import React, { Component }  from 'react';
import logo from '../../imagens/logo-blog.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 50px;
`
const LogoImage = styled.img`
    margin-right: 10px;
`
function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='logo'/>   
        </LogoContainer>
    )
}

export default Logo;