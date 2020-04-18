import {TodoModel} from './todo.model';

const todos: TodoModel [] = [
	{
		id: '1',
		value: 'Learn Vue',
		isDone: false,
	},
	{
		id: '2',
		value: 'Learn React',
		isDone: false,
	},
	{
		id: '3',
		value: 'Learn Angular',
		isDone: false,
	}
];

export const todosMockState = {
	todos
};
