import styled from 'styled-components';

const Form = styled.form` 
  display: block;
  position: relative;
  width: 400px;
  height: 400px;
  background: #fff;
  margin: 0 auto;
  padding: 30px;

  @media (max-width: 700px) {
    max-width: 250px;
    max-height: 250px;
  }

  label {
    display: block;
    position: relative;
    top: -20px;
    left: 0px;
    color: #999;
    font-family: 'Helvetica', sans-serif;
    font-size: 16px;
    z-index: 1;
  }

  input, select, textarea {
    display: block;
    position: relative;
    background: none;
    border: none;
    border-bottom: 1px solid #ddd;
    font-family: 'Helvetica', sans-serif;
    width: 100%;
    font-size: 16px;
    z-index: 1;
  }

  input:focus, input:disabled, input:valid {
    outline: none;
    border-bottom: 1px solid teal;
  }

  input:focus + label, input:valid + label, input:disabled + label, select:focus + label, select:valid + label {
    top: -40px;
    font-size: 12px;
    color: #7f8385;
  }

  select, textarea {
    outline: none;
    border-bottom: 1px solid teal;
  }

  textarea:focus + label, textarea:valid + label {
    font-size: 12px;
    top: -70px;
  }

  .divider {
    position: relative;
    height: 50px;
    width: auto;
    background: none;
  }

  button {
    width: 30%;
    padding: 10px;
    border: none;
    outline: none;
  }

  button:hover {
    cursor: pointer;
    background: teal;
    color: white;
  }

  .center {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column
  }
`;

export default Form;
