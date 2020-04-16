import {createAction, props} from '@ngrx/store';
import {TodoModel} from '../todo.model';

export const add = createAction('Add todo', props<{todo: TodoModel}>());
export const edit = createAction('Edit todo', props<{todo: TodoModel}>());
export const remove = createAction('Delete todo', props<{todo: TodoModel}>());
