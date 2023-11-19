import styled from "styled-components";

export const Titulo = styled.h1`
    widht: 100%;
    padding: 5px 0;
    color: ${props => props.color || '#000'};
    font-size: ${props => props.fontSize || '20px'};
    text-align: ${props => props.textAlign || 'center'};
    margin: 0;
`