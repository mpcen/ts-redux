import { combineReducers } from 'redux';

import { Comment } from '../models/Comment';
import { ActionTypes } from '../actions';
import { commentsReducer } from './comments';
import { counterReducer } from './counter';

type State = { count: number, comments: Comment[] };

const reducers = combineReducers<State, ActionTypes>({
    count: counterReducer,
    comments: commentsReducer    
});

export {
    State,
    reducers,
    commentsReducer,
    counterReducer
};