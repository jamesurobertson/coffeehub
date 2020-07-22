import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.border};
  padding: 8px;
`;

export default Input;
