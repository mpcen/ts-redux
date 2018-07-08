import { expect } from 'chai';

import { counterReducer } from '../../reducers';
import { ActionTypes, actionConstants } from '../../actions';

describe('counter reducer', () => {
    it('handles an unknown action by returning the current state', () => {
        const currentState: number = 0;

        expect(counterReducer(currentState, {} as ActionTypes)).to.eql(0);
    });

    it('handles the INCREMENT_COUNTER action type', () => {
        const currentState: number = 0;
        const action: ActionTypes = {
            type: actionConstants.INCREMENT_COUNTER
        };

        expect(counterReducer(currentState, action)).to.eql(1);
    });
});