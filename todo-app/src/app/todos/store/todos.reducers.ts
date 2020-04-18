import {createReducer, on, Action} from '@ngrx/store';
import {TodoModel} from '../todo.model';
import {add, edit, remove} from './todos.actions';
import {findTodoIndexById} from '../todos.utils';

const initialState: TodoModel [] = [
];

const todosReducer = createReducer(initialState,
	on(add, (state, {todo}) => {
		console.log('adding ', {todo});
		return [todo, ...state];
	}),
	on(edit, (state, {todo}) => {
		const newState = [...state];
		const todoIndex = findTodoIndexById(todo.id, state);
		if (todoIndex > -1) {
			newState[todoIndex] = todo;
		}
		return newState;
	}),
	on(remove, (state, {todo}) => {
		const newState = [...state];
		const todoIndex = findTodoIndexById(todo.id, state);
		if (todoIndex > -1) {
			newState.splice(todoIndex, 1);
		}
		return newState;
	}),
);

export function reducer(state: TodoModel [] | undefined, action: Action) {
	return todosReducer(state, action);
}
