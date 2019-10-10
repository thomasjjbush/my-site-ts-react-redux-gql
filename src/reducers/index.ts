import { combineReducers } from 'redux';  
import { appraisalsReducer } from './appraisals';
import { clientReducer } from './client';
import { postReducer } from './post';
import { postsReducer } from './posts';
import { userReducer } from './user';

export const rootReducer = combineReducers({
    appraisals: appraisalsReducer,
    client: clientReducer,
    post: postReducer,
    posts: postsReducer,
    user: userReducer,
});