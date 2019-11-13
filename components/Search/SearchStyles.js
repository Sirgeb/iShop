import styled from 'styled-components';

const SearchStyles = styled.div`
    display: flex;
    flex: 4;
    justify-content: center;
    align-items: center;

  input[type=search] {
    display: flex;
    flex: 1;
    padding: 10px;
    font-size: 17px;
    border: 0px;
    border-right: 3px solid teal;
    border-left: 3px solid teal;
    outline: none;
    font-stretch: wider;
    background: #f1f1f1;
    font-family: 'Oswald', sans-serif;
  }
`;

export default SearchStyles;
