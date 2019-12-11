import styled from 'styled-components';

const SignoutStyles = styled.div`
  button {
    margin: 15px 0;
    border: none;
    background: none;
    outline: none;
    color: teal;
    font-family: 'Oswald';
    font-size: 14px;
  }
  button:hover {
    cursor: pointer;
    color: black;
  }
  @media (max-width: 700px) {
    button {
      margin: 0;
    }
  }
`;

export default SignoutStyles;
