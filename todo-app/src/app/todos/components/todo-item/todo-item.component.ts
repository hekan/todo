import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {edit, remove} from '../../store/todos.actions';

@Component({
	selector: 't-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
	@Input() id: string;
	@Input() value: string;
	@Input() isDone: boolean;

	constructor(private store: Store) {
	}

	ngOnInit(): void {
	}

	toggle() {
		const isDone = !this.isDone;
		this.store.dispatch(edit(
			{
				todo: {
					id: this.id,
					value: this.value,
					isDone
				}
			}
		));
	}

	remove() {
		this.store.dispatch(remove(
			{
				todo: {
					id: this.id,
					value: this.value,
					isDone: this.isDone
				}
			}
		));
	}

}
