import styled from 'styled-components';

const CollectionHeaderStyles = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ccc;
  border-bottom: 2px solid teal;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 10px;
  margin-bottom: 15px;
  
  a {
    text-decoration: none;
    color: #393939;
  }

  button {
    text-decoration: none;
    font-weight: bold;
    outline: none;
    border: none;
    background: none;
    color: #393939;
    font-family: 'Oswald', sans-serif;
  }

  button:hover {
    cursor: pointer;
    padding-right: 10px;
  }
`;

export default CollectionHeaderStyles;
