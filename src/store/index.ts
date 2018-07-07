import { createStore, applyMiddleware, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { ActionTypes } from '../actions/types';
import { reducers } from '../reducers';
import { State } from '../reducers';

export function initializeStore(initialStore: any = {}): Store<State, ActionTypes> {
    return createStore(
        reducers,
        initialStore,
        applyMiddleware(thunk as ThunkMiddleware<State, ActionTypes>)
    );
}