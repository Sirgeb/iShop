import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 70px;
  margin: 20px auto;

  .wrap {
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  }

  .page-number {
    padding: 10px;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }

  .prev {
    padding: 0 15px;
  }

  .next {
    padding: 0 15px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    outline: none;
    color: #393939;
  }

  p {
    background: none;
    color: #393939;
  }

  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
