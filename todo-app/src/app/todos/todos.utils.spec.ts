import {todosMockState} from './todos.mocks';
import {findTodoIndexById, generateHash, generateNewTodo, isValidTodoText} from './todos.utils';

describe('Todos utils functions', () => {
		it('#findTodoIndexById should return todo index by todo ID', () => {
			const todos = todosMockState.todos;
			const expected = todos[2];
			expect(findTodoIndexById(expected.id, todos)).toBe(2);
		});

		it('#generateNewTodo should craft new TodoModel', () => {
			const todo = generateNewTodo('Basic tasks');
			expect(todo.value).toBe('Basic tasks');
			expect(todo.isDone).toBeFalse();
			expect(todo.id).toBeTruthy();
			expect(todo.id.length).toBeGreaterThan(5);
		});

		it('#isValidTodoText should prevent empty values', () => {
			expect(isValidTodoText(' ')).toBeFalse();
			expect(isValidTodoText('')).toBeFalse();
			expect(isValidTodoText('     ')).toBeFalse();
			expect(isValidTodoText('0')).toBeTrue();
			expect(isValidTodoText('-')).toBeTrue();
			expect(isValidTodoText(' 00 12')).toBeTrue();
		});

		it('#generateHash should generate unique hashes', () => {
			const hashes = [];
			for (let i = 0; i < 100; i++) {
				hashes.push(generateHash());
			}
			const setOfHashes = new Set(hashes);
			expect(setOfHashes.size).toBe(hashes.length);
		});

	}
);
