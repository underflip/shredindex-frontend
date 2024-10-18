import { useMemo } from 'react';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';


let apolloClient: ApolloClient<unknown> | undefined;

const authLink = setContext((_, { headers }) => {
  // Client-side only: Retrieve the token from the client cookie
  if (typeof window !== 'undefined') {
    const token = Cookies.get('shred_47h');
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  }

  return { headers };
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    })),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: unknown) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
