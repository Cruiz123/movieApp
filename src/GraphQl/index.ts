import { ApolloClient, InMemoryCache } from '@apollo/client'

export const Client = new ApolloClient({
    uri: 'https://movieql.netlify.app/graphql',
    cache: new InMemoryCache(),
})
