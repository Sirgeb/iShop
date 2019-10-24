import styled from 'styled-components';

const IncredibleOfferButtonLinkStyles = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  padding: 40px;
  outline: none;
  margin: 15px 0 10px 0; 
  color: teal;
  font-size: 20px;
  border-top: 2px solid teal;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

  &:hover {
    cursor: pointer;
    padding-left: 20px;
  }

  @media (max-width: 1000px) {
    padding: 25px;
  }
`;

export default IncredibleOfferButtonLinkStyles;
