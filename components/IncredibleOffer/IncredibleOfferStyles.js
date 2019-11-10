import styled from 'styled-components';

const IncredibleOfferStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-bottom: 20px;


  .card {
    display: grid;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    transition: 0.5s;
    max-width: 280px;
    height: 300px;
  }

  .card:hover {
    box-shadow: 0 20px 20px rgba(0,0,0,0.1);
    cursor: pointer;
    opacity: 0.9;
  }

  .card .image-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
  }

  .card .image-box img {
    width:100%;
    height: 100%;
  }

  .card .content {
    position: absolute;
    width: 100%;
    height: 70%;
    bottom: 0;
    padding: 80px 20px 10px 20px;
    box-sizing: border-box;
    text-align: center;
    transition: 0.5s;
  }

  .card .content {
    background: linear-gradient(0deg, #3a414c, transparent);
  }

  .card .content .discount-percent {
    background: #eb4b84; 
    color: white
  }

  .card .content .item-name {
    color: orange;
  }

  .card .content .amount {
    font-weight: bold; 
    color: #eb4b84;
  }

  .card .content .discount-amount {
    background: green; 
    color: white; 
    padding:5px
  }

  &:last-child {
    display:grid;
  }

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    justify-content: center;
    align-content: center;
    padding: 0 20px 0 20px;

    .card {
      height: 250px;

      &:last-child {
        display: none;
      }
    }

    .card .content {
      width: 100%;
      height: 70%;
      bottom: 0;
      padding: 20px 20px 10px 20px;
    }

    .card .content h2 {
      padding: 0;
      margin: 10px;
      font-size: 16px;
    }
  }

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    .card:last-child {
      display: grid;
    }
  }
`;

export default IncredibleOfferStyles;
