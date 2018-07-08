import { Dispatch } from 'redux';

import { ActionTypes } from './types';
import { ThunkResult } from './index';
import { Comment } from '../models/Comment';
import { State } from '../reducers';
import {
    ADD_COMMENT,
    DELETE_COMMENT,
    UPDATE_COMMENT,
    INCREMENT_COUNTER
} from './constants';

export function addComment(text: string): ThunkResult<void> {
    return (dispatch: Dispatch<ActionTypes>, getState: () => State) => {        
        dispatch({ type: INCREMENT_COUNTER });
        
        dispatch({
            type: ADD_COMMENT,
            payload: {
                id: getState().count,
                text
            }
        });
    }    
}

export function deleteComment(id: number): ThunkResult<void> {
    return (dispatch: Dispatch<ActionTypes>, getState: () => State) => {
        const filteredComments: Comment[] =
            getState().comments.filter((comment: Comment) => {
                return comment.id !== id;
            });

        dispatch({
            type: DELETE_COMMENT,
            payload: filteredComments
        });
    }
}

export function updateComment(id: number, text: string): ThunkResult<void> {
    return (dispatch: Dispatch<ActionTypes>, getState: () => State) => {
        const updatedList: Comment[] =
            getState().comments.map((comment: Comment) => {
                if(comment.id === id) {
                    comment.text = text;
                }

                return comment;
            });

        dispatch({
            type: UPDATE_COMMENT,
            payload: updatedList
        });
    }
}