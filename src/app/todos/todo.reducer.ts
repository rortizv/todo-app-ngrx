import { createReducer, on } from '@ngrx/store';
import { create } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Learn Angular')
];

const _todoReducer = createReducer(
    initialState,
    on(create, (state, { text }) => [...state, new Todo(text)])  // returns a new array with the new todo
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}