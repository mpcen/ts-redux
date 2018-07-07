import { initializeStore } from './store';
// import {
//     addComment,
//     deleteComment,
//     updateComment 
// } from './actions/comments';

const store = initializeStore();

console.log('************************************')

store.subscribe(() => console.log(store.getState()));
// console.log('Initial State:', store.getState());

// store.dispatch(addComment('Comment 1'));
// store.dispatch(addComment('Comment 2'));
// store.dispatch(deleteComment(1));
// store.dispatch(addComment('Comment 3'));
// store.dispatch(updateComment(2, 'UPDATED COMMENT 2'));

console.log('************************************')
////////////////////////////////////////////////
////////////////////END APP/////////////////////
////////////////////////////////////////////////