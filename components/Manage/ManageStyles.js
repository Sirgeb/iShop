import styled from 'styled-components';

export const AddItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;

  a {
    color: teal;
    text-decoration: none;
  }
`;

export const IconStyle = styled.div`
  cursor: pointer;

  .update:hover {
    color: teal;
  }

  .remove:hover {
    color: #eb4b84;
  }
`;