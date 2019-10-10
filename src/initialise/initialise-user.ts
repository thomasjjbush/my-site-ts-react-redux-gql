import { GraphQLClient } from 'graphql-request';
import { User } from './../types/user';
import { setItem } from '../helpers/local-storage';

export const initialiseUser = async (client: GraphQLClient): Promise<User> => {
    try {
        const { silentSignIn } = await client.request(`
            query {
                silentSignIn {
                    name
                    email
                    token
                    displayPicture
                    settings {
                        darkMode
                    }
                }
            }
        `);
        
        await setItem('token', silentSignIn.token);
        if (silentSignIn.settings.darkMode) document.documentElement.dataset.theme = 'dark';

        return silentSignIn;
    } catch (err) {
        return null;
    };
};