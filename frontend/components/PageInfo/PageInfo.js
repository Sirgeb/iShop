import PageInfoStyles from './PageInfoStyles';

const PageInfo = ({message1, message2}) => (
  <PageInfoStyles>
    <div className="message1">{message1}</div>
    <div className="message2">{message2}</div>
  </PageInfoStyles>
);

export default PageInfo;
