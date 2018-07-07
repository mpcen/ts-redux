import { ThunkAction } from 'redux-thunk';

import { State } from '../reducers';
import { ActionTypes } from './types';
import * as commentsActions from './comments';
import * as actionConstants from './constants';

type ThunkResult<R> = ThunkAction<R, State, undefined, ActionTypes>;

export {
    commentsActions,
    ActionTypes,
    ThunkResult,
    actionConstants
};