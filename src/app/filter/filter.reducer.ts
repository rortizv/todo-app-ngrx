import { createReducer, on } from '@ngrx/store';
import { clearCompleted, setFilter, validFilters } from './filter.actions';

export const initialState: validFilters = 'all';

const _filterReducer = createReducer(
    initialState,
    on(setFilter, (state, { filter }) => state),
    on(clearCompleted, (state) => state)
);

export function filterReducer(state: any, action: any) {
    return _filterReducer(state, action);
}