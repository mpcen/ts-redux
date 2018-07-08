import { initializeStore } from './store';
import {
    // commentsActions,
    usersActions
} from './actions';

const store = initializeStore();

console.log('************************************')

store.subscribe(() => console.log(store.getState()));
console.log('Initial State:', store.getState());

store.dispatch(usersActions.getUsers());

// store.dispatch(commentsActions.addComment('Comment 1'));
// store.dispatch(commentsActions.addComment('Comment 2'));
// store.dispatch(commentsActions.deleteComment(1));
// store.dispatch(addComment('Comment 3'));
// store.dispatch(commentsActions.updateComment(2, 'UPDATED COMMENT 2'));

console.log('************************************')
////////////////////////////////////////////////
////////////////////END APP/////////////////////
////////////////////////////////////////////////