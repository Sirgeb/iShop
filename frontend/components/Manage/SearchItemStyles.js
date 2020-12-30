import styled from 'styled-components';

const SearchItemStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  input[type=search] {
    display: flex;
    flex: 1;
    padding: 10px;
    font-size: 16px;
    outline: none;
    font-stretch: wider;
    font-family: 'Oswald', sans-serif;
  }
`;

export default SearchItemStyles;
