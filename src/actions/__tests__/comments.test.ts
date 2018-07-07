import { expect } from 'chai';
import { Middleware } from 'redux';
import thunk, { ThunkMiddleware, ThunkDispatch } from 'redux-thunk';
import createMockStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';

import { State } from '../../reducers';
import { ActionTypes, commentsActions, actionConstants } from '../index';

describe('comments', () => {
    type DispatchExts = ThunkDispatch<State, undefined, ActionTypes>;
    const middlewares: Array<Middleware> = [thunk as ThunkMiddleware<State, ActionTypes>];    
    const mockStoreCreator: MockStoreCreator<State, DispatchExts> =
        createMockStore<State, ActionTypes>(middlewares);

    it('dispatches proper actions when adding a comment', () => {
        const store: MockStoreEnhanced<State, DispatchExts> = mockStoreCreator(
            { count: 0, comments: [] }
        );
        const expectedActions: Array<ActionTypes> = [
            { type: actionConstants.INCREMENT_COUNTER },
            {
                type: actionConstants.ADD_COMMENT,
                payload: {
                    id: 0,
                    text: 'New comment'
                }
            }
        ];
        
        store.dispatch(commentsActions.addComment('New comment'));

        expect(store.getActions()).to.eql(expectedActions);
    });

    it('dispatches proper actions when deleting a comment', () => {
        const store: MockStoreEnhanced<State, DispatchExts> = mockStoreCreator(
            {
                count: 2,
                comments: [
                    { id: 1, text: 'comment 1' },
                    { id: 2, text: 'comment 2' }
                ]
            }
        );

        const expectedActions: Array<ActionTypes> = [
            {
                type: actionConstants.DELETE_COMMENT,
                payload: [{ id: 2, text: 'comment 2' }]
            }
        ];
        
        store.dispatch(commentsActions.deleteComment(1));

        expect(store.getActions()).to.eql(expectedActions);
    });

    it('dispatches proper actions when updating a comment', () => {
        const store: MockStoreEnhanced<State, DispatchExts> = mockStoreCreator(
            {
                count: 2,
                comments: [{ id: 1, text: 'starting text' }]
            }
        );

        const expectedActions: Array<ActionTypes> = [
            {
                type: actionConstants.UPDATE_COMMENT,
                payload: [{ id: 1, text: 'updated text' }]
            }
        ];
        
        store.dispatch(commentsActions.updateComment(1, 'updated text'));

        expect(store.getActions()).to.eql(expectedActions);
    });
});