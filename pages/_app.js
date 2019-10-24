import App from "next/app";
import { ApolloProvider } from '@apollo/react-hooks';

import withApollo from '../lib/withApollo';
import Layout from '../components/_App/Layout/Layout';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // ensure all queries and mutations are ran before first render
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    
    return (
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
