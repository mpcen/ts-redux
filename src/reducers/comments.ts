import {
    ActionTypes,
    actionConstants
} from '../actions';
import { Comment } from '../models/Comment';

export function commentsReducer(state: Comment[] = [], action: ActionTypes) {
    switch(action.type) {
        case actionConstants.ADD_COMMENT:
        console.log('33333')
            return [
                ...state,
                action.payload
            ];

        case actionConstants.DELETE_COMMENT:            
            return action.payload;

        case actionConstants.UPDATE_COMMENT:            
            return action.payload;

        default:
            return state;
    }
};