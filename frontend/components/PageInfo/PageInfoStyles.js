import styled from 'styled-components';

const PageInfoStyles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 120px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background: linear-gradient(0deg, #3a414c, transparent);

  @media (max-width: 700px) {
    z-index: 1;
  }

  .message1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: teal;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 8px;
    animation: text 3s 1;
    text-align: center;
  }

  .message2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: orange; 
    margin-bottom: 10px;
    padding-top: 10px;
    animation: text 3s 1;
    text-align: center;
  }

  @keyframes text {
    0% {
      color: black;
    }
    30% {
      color: pink;
    }
    80% {
      color: orange;
    }
  }

  @media (max-width: 1000px) {
    .message1 {
      font-size: 40px;
    }

    .message2 {
      padding: 5px 5px;
      font-size: 25px;
      margin: 0;
    }
  }

  @media (max-width: 700px) {
    margin-top: 60px;

    .message1 {
      font-size: 30px;
      padding: 10px 0 5px 0;
    }

    .message2 {
      padding: 5px 5px;
      font-size: 25px;
      margin: 0;
    }
  }
`;

export default PageInfoStyles;
