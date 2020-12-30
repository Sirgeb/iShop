import styled from 'styled-components';

const WishlistStyle = styled.div`
  @media (max-width: 1000px) {
    justify-content: center;
    align-items: center;
  }

  .collection-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 30px;
  }

  .collection-items .collection-card {
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: 230px;
    max-width: 230px;
  }

  .collection-items .collection-card .card-image-and-amount-wrapper {
    display: flex;
    flex-direction: column;
    flex: 4;
    justify-content: space-between;
    margin: 10px;
  }

  .collection-items .collection-card .card-image-and-amount-wrapper .img-box img {
    width: 100%;
  }

  .collection-items .collection-card .card-image-and-amount-wrapper .amount s {
    font-size: 12px;
    color: grey;
  }

  .collection-items .collection-card .wrapper {
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: space-between;
  }

  .collection-items .collection-card .wrapper .top {
    padding-top: 10px;
    max-height: 80px;
  }

  .collection-items .collection-card .wrapper .top .item-name {
    text-align: center;
    background: #eb4b84;
    padding: 5px;
    font-size: 16px;
    color: white;
  }

  .collection-items .collection-card .wrapper .top button {
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


  .collection-items .collection-card .wrapper .top .add-to-cart {
    font-size: 14px;
  }
  
  .collection-items .collection-card .wrapper .top .add-to-cart:hover {
    opacity: 0.9;
    font-size: 13px;
  }

  .collection-items .collection-card .wrapper .bottom {
    display: flex;
    padding: 10px;
    justify-content: flex-end;
  }

  .collection-items .collection-card .wrapper .bottom .discount-percent{
    padding-top: 10px;
  }

  @media (max-width: 1000px) {
    .collection-items {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
      justify-content: space-between;
    }

    /* .collection-items .collection-card:last-child {
      display: none;
    } */
  }

  @media (max-width: 900px) {
    .collection-items {
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: space-between;
      grid-gap: 20px;
      padding: 20px;
    }

    /* .collection-items .collection-card:nth-child(4) {
      display: none;
    }

    .collection-items .collection-card:last-child {
      display: none;
    } */
  }

  @media (max-width: 600px) {
    .collection-items {
      grid-template-columns: 1fr 1fr;
    }

    /* .collection-items .collection-card:nth-child(3) {
      display: none;
    } */
  }
`;

export default WishlistStyle;
