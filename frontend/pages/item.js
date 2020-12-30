import ItemComponent from '../components/Item/Item';

const Item = props => (
  <ItemComponent id={props.query.id} />
);

export default Item;