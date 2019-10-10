import { ActionTypes } from './../types/store';
import { GraphQLClient } from 'graphql-request';
import { AnyAction } from 'redux';

export const clientReducer = (client: GraphQLClient = {} as any, action: AnyAction) => {
    switch ( action.type ) {
        case ActionTypes.SIGN_IN: client.setHeader('authorization', action.payload.token);
        case ActionTypes.SIGN_OUT: client.setHeader('authorization', '');
        default: return client
    }
}