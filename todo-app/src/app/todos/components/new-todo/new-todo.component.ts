import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {add} from '../../store/todos.actions';
import {generateNewTodo} from '../../todos.utils';
import {TodoModel} from '../../todo.model';

@Component({
	selector: 't-new-todo',
	templateUrl: './new-todo.component.html',
	styleUrls: ['./new-todo.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTodoComponent implements OnInit {
	newTodo: string;
	constructor(private store: Store) {
		this.clear();
	}

	get isValid(): boolean {
		const parsed = this.newTodo.trim();
		return !!parsed;
	}

	ngOnInit(): void {
	}

	add() {
		if (this.isValid) {
			this.store.dispatch(add({todo: generateNewTodo(this.newTodo) } ));
			this.clear();
		}
	}

	clear() {
		this.newTodo = '';
	}

}
