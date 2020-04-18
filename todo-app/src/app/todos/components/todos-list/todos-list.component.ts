import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {TodoModel} from '../../todo.model';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

@Component({
	selector: 't-todos-list',
	templateUrl: './todos-list.component.html',
	styleUrls: ['./todos-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {
	todos$: Observable<TodoModel []>;

	constructor(private store: Store<{ todos: TodoModel [] }>) {
		this.todos$ = store.pipe(
			select('todos')
		);
	}

	ngOnInit(): void {
	}

}
