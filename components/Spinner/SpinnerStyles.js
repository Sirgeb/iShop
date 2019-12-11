import styled from 'styled-components';

const SpinnerStyles = styled.div`
  display: flex;
  width: 80%;
  height: 20vh;
  margin: 0 auto;
  /* background: rgba(255, 255, 255, 40%); */
  margin-top: ${props => props.spacing ? props.spacing : "0px"};

  .spinner {
    position: absolute;
    display: flex;
    align-self: center;
    left: 50%;
    transform: translate(-50%);
    width: 64px;
    height: 64px;
    border-radius: 64px;
  }

  .spinner::before {
    position: absolute;
    content: "";
    width: 64px;
    height: 64px;
    border-radius: 64px;
    color: "#323b40";
    visibility: ${props => props.hide && "hidden"};
    box-shadow: inset -5px 0 0 5px currentColor;
    clip: rect(0, 64px, 32px, 0);
    animation: rotator 1s infinite linear;
  }

  @keyframes rotator {
    0% {
      transform: rotate(-180deg);
      box-shadow: inset -5px 0 0 5px currentColor;
    }
    50% {
      transform: rotate(0deg);
      box-shadow: inset -1px 0 0 1px currentColor;
    }
    100% {
      transform: rotate(180deg);
      box-shadow: inset -5px 0 0 5px currentColor;
    }
  }
`;

export default SpinnerStyles;
