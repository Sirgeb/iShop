import HeadContent from '../Header/HeadContent';
import Header from "../Header/Header";
import { GlobalStyle, Container } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <>
      <HeadContent />
      <Header />
      <Container>
        {children}
        <GlobalStyle />
      </Container>
    </>
  );
}

export default Layout;
