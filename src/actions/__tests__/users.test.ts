import { expect } from 'chai';
import * as moxios from 'moxios';
import { Middleware } from 'redux';
import thunk, { ThunkMiddleware, ThunkDispatch } from 'redux-thunk';
import createMockStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';

import { State } from '../../reducers';
import { ActionTypes, actionConstants, usersActions } from '../index';

describe('async users actions', () => {
    type DispatchExts = ThunkDispatch<State, undefined, ActionTypes>;
    const middlewares: Array<Middleware> = [thunk as ThunkMiddleware<State, ActionTypes>];    
    const mockStoreCreator: MockStoreCreator<State, DispatchExts> =
        createMockStore<State, ActionTypes>(middlewares);
    let store: MockStoreEnhanced<State, DispatchExts>;

    beforeEach(() => {
        moxios.install();
        store = mockStoreCreator(
            { count: 0, comments: [], users: [] }
        );
    });

    afterEach(() => {
        moxios.uninstall();
        store.clearActions();
    });

    it('dispatches proper actions when successfully fetching users', (done) => {
        const expectedActions = [
            { type: actionConstants.GET_USERS_IN_PROGRESS },
            { type: actionConstants.GET_USERS_SUCCESS }
        ];

        store.dispatch(usersActions.getUsers())
            .then(() => {     
                expect(store.getActions()[0]).to.eql(expectedActions[0]);
                expect(store.getActions()[1].type).to.eql(expectedActions[1].type); 
                done();      
            });

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();        

            request.respondWith({
                status: 200
            });
        });
    });

    it('dispatches proper actions when fetching users fails', (done) => {
        const expectedActions = [
            { type: actionConstants.GET_USERS_IN_PROGRESS },
            { type: actionConstants.GET_USERS_FAIL }
        ];

        store.dispatch(usersActions.getUsers())
            .then(() => {
                expect(store.getActions()[0]).to.eql(expectedActions[0]);
                expect(store.getActions()[1].type).to.eql(expectedActions[1].type);                
                done();      
            });

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();        
            request.responseType
            request.respondWith({
                status: 500
            });
        });
    });
});