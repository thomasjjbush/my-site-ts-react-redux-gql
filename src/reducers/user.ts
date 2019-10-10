import { AnyAction } from 'redux';
import { ActionTypes } from './../types/store';
import { User } from './../types/user';


export const userReducer = (state: User = null, action: AnyAction) => {
    switch ( action.type ) {
        case ActionTypes.SIGN_IN: return action.payload;
        case ActionTypes.SIGN_OUT: return null;
        default: return state
    }
}