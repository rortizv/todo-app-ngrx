import { createReducer, on } from '@ngrx/store';
import { cleanTodos, create, erase, toggle, toggleAll, update } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Learn Angular'),
    new Todo('Learn React'),
    new Todo('Learn Python'),
    new Todo('Learn AWS'),
];

const _todoReducer = createReducer(
    initialState,
    on(create, (state, { text }) => [...state, new Todo(text)]),  // returns a new array with the new todo
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            } else {
                return todo;
            }
        });
    }),
    on(update, (state, { id, text }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text: text
                };
            } else {
                return todo;
            }
        }
    )}),
    on(erase, (state, { id }) => {
        return state.filter(todo => todo.id !== id);
    }),
    on(toggleAll, (state, { completed }) => {
        return state.map(todo => {
            return {
                ...todo,
                completed: completed
            };
        }
    )}),
    on(cleanTodos, state => {
        return state.filter(todo => !todo.completed);
    })
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}