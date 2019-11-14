import styled from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 300px;
  z-index: 2;

  @media (max-width: 600px) {
    max-width: 200px
  }
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid teal;
  background: white;
  padding: 1rem;
  transition: all 0.2s;
  ${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 10px solid white;
  &:hover {
    cursor: pointer;
  }
  img {
    margin-right: 10px;
  }
  .img-text {
    display: flex;
    align-items: center;
  }
`;

const SearchStyles = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

  input[type=search] {
    display: flex;
    width: 300px;
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
  @media (max-width: 600px) {
    input[type=search] {
      max-width: 200px;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
