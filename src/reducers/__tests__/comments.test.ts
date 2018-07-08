import { expect } from 'chai';

import { commentsReducer } from '../../reducers';
import { Comment } from '../../models/Comment';
import { ActionTypes, actionConstants } from '../../actions';

describe('comments reducer', () => {
    it('handles an unknown action by returning the current state', () => {
        const currentState: Comment[] = [{ id: 1, text: 'first' }];

        expect(commentsReducer(currentState, {} as ActionTypes)).to.eql([
            { id: 1, text: 'first' }
        ]);
    });

    it('handles the ADD_COMMENT action type', () => {
        const currentState: Comment[] = [{ id: 1, text: 'first' }];
        const action: ActionTypes = {
            type: actionConstants.ADD_COMMENT,
            payload: { id: 2, text: 'second' } as Comment
        };

        expect(commentsReducer(currentState, action)).to.eql([
            { id: 1, text: 'first' },
            { id: 2, text: 'second' }
        ]);
    });

    it('handles the UPDATE_COMMENT action type', () => {
        const action: ActionTypes = {
            type: actionConstants.UPDATE_COMMENT,
            payload: [{ id: 1, text: 'modified' }]
        };

        expect(commentsReducer([], action)).to.eql([
            { id: 1, text: 'modified' },
        ]);
    });

    it('handles the DELETE_COMMENT action type', () => {
        const action: ActionTypes = {
            type: actionConstants.DELETE_COMMENT,
            payload: [{ id: 2, text: 'second' }]
        };

        expect(commentsReducer([], action)).to.eql([
            { id: 2, text: 'second' },
        ]);
    });
});