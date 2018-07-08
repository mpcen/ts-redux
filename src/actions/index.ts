import { ThunkAction } from 'redux-thunk';

import { State } from '../reducers';
import { ActionTypes } from './types';
import * as actionConstants from './constants';
import * as commentsActions from './comments';
import * as usersActions from './users';

type ThunkResult<R> = ThunkAction<R, State, undefined, ActionTypes>;

export {
    commentsActions,
    usersActions,
    ActionTypes,
    ThunkResult,
    actionConstants
};