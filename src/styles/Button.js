import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border: none;
    padding: 8px;
    border-radius: 5px;
    margin: 1rem;
    background-color: ${(props) => props.color || props.theme.blue};
    color: white;
    font-weight: bold;

    &:hover {
        opacity: .90;
    }
`
export default Button
