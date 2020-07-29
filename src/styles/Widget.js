import styled from "styled-components";

const Widget = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 20px 10px 0;
  padding: 10px;
  border-radius: 5px;

  background-color: ${(props) => props.theme.bgSecondary};
  border: 1px solid ${(props) => props.theme.borderDarker};

  @media screen and (max-width: 830px) {
      margin: 10px 0;
      padding: 10px 0;
  }
`;

export default Widget;
