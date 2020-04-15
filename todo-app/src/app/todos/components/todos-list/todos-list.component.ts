import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {TodoModel} from '../../todo.model';

@Component({
	selector: 't-todos-list',
	templateUrl: './todos-list.component.html',
	styleUrls: ['./todos-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {
	todos: TodoModel [] = [];

	constructor() {
	}

	ngOnInit(): void {
		for (let i = 0; i < 50; i++) {
			this.todos.push(
				{
					id: 'id_' + i,
					isDone: true,
					value: 'test test'
				}
			);
		}
	}

}
