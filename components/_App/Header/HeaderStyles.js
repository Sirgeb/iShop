import styled from 'styled-components';

const HeaderStyles = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  justify-content: center;
  border-bottom: 2px solid teal;
  height: 100px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background: white;

  a {
    text-decoration: none;
    color: teal;
  }

  .wrapper {
    display: flex;
    flex: 2;
    margin-right: 0;
  }

  .wrapper .logo {
    display: flex;
    margin: 15px 30px;
    color: teal;
    align-items: center;
  }

  .wrapper .logo i {
    font-size: 60px;
    transform: rotate(20deg);
  }

  .wrapper .logo span {
    font-size: 24px;
  }

  .wrapper .search {
    display: flex;
    flex: 4;
    justify-content: center;
    align-items: center;
  }

  .wrapper .search input[type=search] {
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

  @media (max-width: 700px) {
    display: flex;
    position: relative;
    flex-direction: column;
    padding-top: 10px;
    height: 80px;
    border-bottom: 8px solid teal;
    box-shadow: none;

    .wrapper {
      margin-right: 20px;
    }

    .wrapper .logo i {
      font-size: 20px;
    }

    .icon {
      font-size: 30px;
    }
  }
`;

export default HeaderStyles;
