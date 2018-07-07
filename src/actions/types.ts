import { Comment } from '../models/Comment';

export type ActionTypes = 
    | { type: 'ADD_COMMENT', payload: Comment }
    | { type: 'DELETE_COMMENT', payload: Comment[] }
    | { type: 'UPDATE_COMMENT', payload: Comment[] }
    | { type: 'INCREMENT_COUNTER' };