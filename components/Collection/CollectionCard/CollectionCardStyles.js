import styled from 'styled-components';

const CollectionCardStyles = styled.div`
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  height: 230px;
  max-width: 230px;

  .card-image-and-amount-wrapper {
    display: flex;
    flex-direction: column;
    flex: 4;
    justify-content: space-between;
    margin: 10px;
  }

  .img-box img {
    width: 100%;
  }

  .amount s {
    font-size: 12px;
    color: grey;
  }

  .wrapper {
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: space-between;
  }

  .top {
    padding-top: 10px;
    max-height: 80px;
  }

  .item-name {
    text-align: center;
    background: #eb4b84;
    padding: 5px;
    font-size: 16px;
    color: white;
  }

  button {
    border: none;
    outline: none;
    width: 100%;
    padding: 10px;
    color: white;
    background: teal;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
  }

  .add-to-wishlist:hover {
    color: #eb4b84;
  }

  .add-to-cart {
    font-size: 14px;
  }
  .add-to-cart:hover {
    opacity: 0.9;
    font-size: 12px;
  }

  .bottom {
    display: flex;
    padding: 10px;
    justify-content: flex-end;
  }

  .discount-percent{
    padding-top: 10px;
  }

  @media (max-width: 1000px) {
    &:last-child {
      display: none;
    }
  }

  @media (max-width: 900px) {
    &:nth-child(4) {
      display: none;
    }

    &:last-child {
      display: none;
    }
  }

  @media (max-width: 600px) {
    &:nth-child(3) {
      display: none;
    }
  }
`;

export default CollectionCardStyles;
