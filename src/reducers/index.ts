import { combineReducers } from 'redux';

import { Comment } from '../models/Comment';
import { ActionTypes } from '../actions';
import { commentsReducer } from './comments';
import { counterReducer } from './counter';

type State = {
    count: number,
    comments: Comment[],
    users: any
};

const reducers = combineReducers<State, ActionTypes>({
    count: counterReducer,
    comments: commentsReducer,
    users: () => null
});

export {
    State,
    reducers,
    commentsReducer,
    counterReducer
};