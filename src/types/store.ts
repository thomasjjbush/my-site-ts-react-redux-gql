import { rootReducer } from './../reducers';

export enum ActionTypes {
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT',
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POST = 'FETCH_POST',
};

export type Store = ReturnType<typeof rootReducer>