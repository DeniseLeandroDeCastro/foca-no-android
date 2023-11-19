import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 100px;
    border-radius: 25px;
    width: 170px;
    color: #FFF;
    font-size: 16px;
    margin_bottom: 10px;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }
`

export default Input