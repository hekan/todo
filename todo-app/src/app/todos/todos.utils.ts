import {TodoModel} from './todo.model';

export const findTodoIndexById = (id: string, todos: TodoModel []) => {
	return todos.findIndex(item => item.id === id);
};

export const generateNewTodo = (text: string): TodoModel => {
	return {
		id: generateHash(),
		value: text,
		isDone: false
	};
};

export const isValidTodoText = (text: string): boolean => {
	const parsed = text.trim();
	return !!parsed;
};

export const generateHash = () => {
	return Date.now().toString() + Math.floor(Math.random() * Math.floor(10000));
};
