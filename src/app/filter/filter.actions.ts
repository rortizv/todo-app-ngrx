import { createAction, props } from "@ngrx/store";

export type validFilters = 'all' | 'completed' | 'pending';

export const setFilter = createAction('[Filter] Set Filter', props<{ filter: validFilters }>());
export const clearCompleted = createAction('[Filter] Clear Completed');