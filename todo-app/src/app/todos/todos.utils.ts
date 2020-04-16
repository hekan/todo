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

const generateHash = () => {
	return Date.now().toString();
};
