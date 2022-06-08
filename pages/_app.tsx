import { ApolloProvider } from "@apollo/client";
import {getApolloClient} from "../lib/apollo-client";
import Layout from "../components/Layout";

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const client = getApolloClient();
  return (<ApolloProvider client={client}>  
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>)
}

export default MyApp
