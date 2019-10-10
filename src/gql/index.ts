import { GraphQLClient } from 'graphql-request';

interface Variables {
    id?: string;
    skip?: number;
    limit?: number;
};

export const request = async ({
    client,
    query,
    variables,
}: {
    client: GraphQLClient,
    query: string,
    variables?: Variables,
}): Promise<any> => {
    try {
        const res = await client.request(query, variables);
        return res;
    } catch (err) {

    };
};