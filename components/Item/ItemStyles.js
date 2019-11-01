import styled from 'styled-components';

const ItemStyles = styled.div`
  .flip-card {
    background-color: transparent;
    width: 300px;
    height:300px;
    margin-left: 120px;
    border: 1px solid #f1f1f1;
    perspective: 1000px; 
  }

  @media (max-width: 1000px) {
    .flip-card {
      width: 250px;
      height:250px;
      margin-left: 70px;
    }
  }

  @media (max-width: 600px) {
    .flip-card {
      margin-left: 20px;
    }
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card-inner img{
    width: 100%;
    height: 100%;
  }


  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: white;
  }

  .flip-card-back {
    background-color: white;
    transform: rotateY(180deg);
  }

  .item {
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
  }

  .item button {
    white-space: nowrap;
  }

  .item button:hover {
    cursor: pointer;
  }

  .item ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 200px;
  }

  @media (max-width: 800px) {
    .item {
      margin-right: 20px;
    }
    .item ul {
      margin-right: 0px;
    }
  }

  .item li {
    padding-bottom: 20px;
    list-style: none;
  }

  .content h2 {
    background:teal;
    color: white;
    font-weight: 500;
    margin: 10px 0;
    text-align: center;
  }

  .content p {
    background: none; 
    text-align:center; 
    color: #393939;
  }

`;

export default ItemStyles;