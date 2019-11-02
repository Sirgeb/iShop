import styled from 'styled-components';

const OrderStyles = styled.div`
  margin-bottom: 300px;
  width: 100%;

  input {
    display: none;
  }

  label {
    display: flex;
    position: relative;
    padding: 10px; 
    cursor: pointer;
    background: #ccc;
    transition: all 0.3s ease;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  label:hover {
    background: teal;
    color: white;
  }

  input[type="checkbox"] + label::after {
    content:'+ ';
  }

  input[type="checkbox"]:checked + label::after {
    content:'- ';
  }

  .insidecontainer {
    display: flex;
    flex-direction: column;
    height: 0px;
    padding: 0px 15px;
    background: white;
    overflow: hidden;
    transition: all 0.3s ease;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h2 {
    font-size: 12px;
    text-align: center;
    margin-bottom: 10px;
  }

  input:checked ~ .insidecontainer {
    display: flex;
    height: auto;
    flex-direction: column;
  }

  input:checked ~ .insidecontainer .items-wrapper{ 
    display: flex;
    flex-wrap: wrap;
  }

  input:checked ~ .insidecontainer .items-wrapper .item { 
    display: flex; 
    justify-content: center;
    margin-bottom: 10px; 
    flex: 1;
  }

  input:checked ~ .insidecontainer .items-wrapper .item .item-details { 
    display: flex; 
    flex-direction: column; 
    margin: 10px; 
    justify-content: space-around;
  }

  input:checked ~ .insidecontainer .items-wrapper .item .item-details span{ 
    display: flex;
    white-space: nowrap;
  }

  input:checked ~ .insidecontainer p { 
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  input:checked ~ .insidecontainer p span {
    background: #ccc;
    margin-right: 10px;
    padding: 10px;
  }

  .accordion-wrapper {
    border-bottom: 2px solid #393939;
  }

  label {
    display: flex;
    justify-content: space-between;
  }
`;

export default OrderStyles;
