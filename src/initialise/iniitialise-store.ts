import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';  
import { rootReducer } from './../reducers';

export const initialiseStore = (initialState: any) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk),
    );
};