import styled from 'styled-components';

const CollectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .collection-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  @media (max-width: 1000px) {
    .collection-items {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
      justify-content: space-between;
    }
  }

  @media (max-width: 900px) {
    .collection-items {
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: space-between;
      grid-gap: 20px;
      padding: 20px;
    }
  }

  @media (max-width: 600px) {
    .collection-items {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default CollectionStyles;
