import { setItem } from "../helpers/local-storage";
import { gqlSignInQuery } from './../gql/queries/sign-in';
import { ActionTypes, Store } from './../types/store';
import { Dispatch } from "redux";

export const signIn = (email: string, password: string) => async (dispatch: Dispatch, getState: () => Store) => {
    try {
        if (!email || !password) return;
        const { client } = getState();
        
        const { signIn } = await client.request(gqlSignInQuery, {
            email,
            password,
        });

        await setItem('token', signIn.token);

        dispatch({
            type: ActionTypes.SIGN_IN,
            payload: signIn,
        })

    } catch (err) {
        console.log(err);
    };
};