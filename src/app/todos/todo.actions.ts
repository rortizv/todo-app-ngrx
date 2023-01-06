import { createAction, props } from "@ngrx/store";

export const create = createAction('[TODO] Create Todo', props<{ text: string }>());
export const toggle = createAction('[TODO] Toggle Todo', props<{ id: number }>());
export const update = createAction('[TODO] Update Todo', props<{ id: number, text: string }>());
export const erase = createAction('[TODO] Delete Todo', props<{ id: number }>());
export const toggleAll = createAction('[TODO] Toggle All Todos', props<{ completed: boolean }>());