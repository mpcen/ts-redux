import { Comment, User } from '../models';
import { AxiosError } from 'axios';

export type ActionTypes = 
    | { type: 'ADD_COMMENT', payload: Comment }
    | { type: 'DELETE_COMMENT', payload: Comment[] }
    | { type: 'UPDATE_COMMENT', payload: Comment[] }
    | { type: 'INCREMENT_COUNTER' }
    | { type: 'GET_USERS_IN_PROGRESS' }
    | { type: 'GET_USERS_SUCCESS', payload: User[] }
    | { type: 'GET_USERS_FAIL', payload: AxiosError }