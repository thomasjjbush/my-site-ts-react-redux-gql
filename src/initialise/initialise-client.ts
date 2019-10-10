import { GraphQLClient } from 'graphql-request';

export const initialiseClient = (token: string): GraphQLClient => {
    try {
        return new GraphQLClient('http://localhost:5000/graphql', { headers: { authorization: token || '' } });
    } catch (err) {
        return null;
    };
};