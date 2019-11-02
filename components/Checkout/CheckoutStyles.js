import styled from 'styled-components';

const CheckoutStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;

  h2 {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
  }

  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;

    button {
      display: none;
    }
  }

  .btn {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    padding: 10px;
    background: teal;
    color: white;
    text-transform: uppercase;
    transition: 0.5s;
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
  }

  .btn:hover {
    cursor: pointer;
  }

  .left {
    display: flex;
    max-width: 200px;
    align-items: center;
  }

  .left button {
    text-transform: capitalize;
    padding: 10px;
    font-size: 16px;
    color: #393939;
    border-color: #ccc;
  }

  .left button:hover {
    cursor: pointer;
    border: none;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .right ul {
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    width: 300px;
  }

  .right ul li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 10px;
  }

  ul li span {
    font-size: 14px;
  }

  ul li span .right {
    display: flex;
    justify-content: flex-end;
    text-align: right;
  }

  .right h2 {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    padding: 10px;
    text-align: center;
    background: teal;
    color: white;
  }

  .amount {
    text-align: right;
  }

  .top-border {
    border-top: 2px solid #ccc;
  }
`;

export default CheckoutStyles;
