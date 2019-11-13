import styled from 'styled-components';

const NavStyles = styled.div`
  position: relative;
  display: flex;
  flex: 4;
  justify-content: center;
  align-items: center;
  

  ul {
    display: flex;
    flex: 1;
    margin: 0;
    padding: 0;
  }

  ul li {
    display: flex;
    justify-content: space-around;
    flex: 1;
    list-style: none;
    white-space: nowrap;
  }

  ul li a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    color: teal;
  }

  ul li a:hover {
    color: #393939;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    width: 100%;
    position: absolute;
    top: 95px;
    left: 0;
    scroll-behavior: smooth;
    overflow: scroll;
    padding-bottom: 5px;
    padding-top: 5px;
    background: white;
  

    ul li {
      margin-right: 20px;
    }

    ul li:first-child {
      margin-left: 20px;
    }

    .icon {
      font-size: 30px;
    }
  }

  @media (max-width: 400px) {
    ul li:first-child {
      margin-left: 70px;
    }
  }
`;

export default NavStyles;
