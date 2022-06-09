import {ApolloClient,InMemoryCache} from "@apollo/client";

export const getApolloClient = () => {
    return new ApolloClient({
        uri: 'https://hackernews-kgl.herokuapp.com',
        cache: new InMemoryCache()
      });
};

