import styled from 'styled-components';

const FooterStyles = styled.p`
  display: flex;
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin: 20px 0 40px 0;

  a {
    color: black;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    color: teal;
  }
`;

export default FooterStyles;