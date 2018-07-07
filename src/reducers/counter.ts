import {
    ActionTypes,
    actionConstants
} from '../actions';

export function counterReducer(state: number = 0, action: ActionTypes) {
    switch(action.type) {
        case actionConstants.INCREMENT_COUNTER:
            return state + 1;

        default:
            return state;
    }
}