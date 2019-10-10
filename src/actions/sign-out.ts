import { ActionTypes, Store } from './../types/store';
import { Dispatch } from "redux";

export const signOut = () => async (dispatch: Dispatch, getState: Store) => {
    try {
        await localStorage.removeItem('token');
        dispatch({ type: ActionTypes.SIGN_OUT });
    } catch (err) {
        throw new Error(err);
    };
};