import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import AppContext from '../hooks/AppContext';
import Layout from '../components/_App/Layout/Layout';

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <AppContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext>
    </ApolloProvider>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
}

export default App;