import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';

import { ActionTypes } from './types';
import { ThunkResult } from './index';
// import { User } from '../models';
// import { State } from '../reducers';
import {
    GET_USERS_IN_PROGRESS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL
} from './constants';

export function getUsers(): ThunkResult<Promise<void>> {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch({ type: GET_USERS_IN_PROGRESS });

        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res: AxiosResponse) => {
                dispatch({
                    type: GET_USERS_SUCCESS,
                    payload: res.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: GET_USERS_FAIL,
                    payload: err
                });
            });
    }    
}

// export function deleteComment(id: number): ThunkResult<void> {
//     return (dispatch: Dispatch<ActionTypes>, getState: () => State) => {
//         const filteredComments: Comment[] =
//             getState().comments.filter((comment: Comment) => {
//                 return comment.id !== id;
//             });

//         dispatch({
//             type: DELETE_COMMENT,
//             payload: filteredComments
//         });
//     }
// }

// export function updateComment(id: number, text: string): ThunkResult<void> {
//     return (dispatch: Dispatch<ActionTypes>, getState: () => State) => {
//         const updatedList: Comment[] =
//             getState().comments.map((comment: Comment) => {
//                 if(comment.id === id) {
//                     comment.text = text;
//                 }

//                 return comment;
//             });

//         dispatch({
//             type: UPDATE_COMMENT,
//             payload: updatedList
//         });
//     }
// }