import { combineReducers } from 'redux';

import { Comment } from '../models/Comment';
import { ActionTypes } from '../actions';
import { commentsReducer } from './comments';
import { counterReducer } from './counter';

export type State = { count: number, comments: Comment[] };

export const reducers = combineReducers<State, ActionTypes>({
    count: counterReducer,
    comments: commentsReducer    
});