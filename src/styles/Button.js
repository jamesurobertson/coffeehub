import styled from 'styled-components'

const Button = styled.button`
    border: none;
    padding: 8px;
    border-radius: 5px;
    background-color: ${(props) => props.color || props.theme.blue};
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        opacity: .90;
    }
`
export default Button
