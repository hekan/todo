import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

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

	constructor() {
	}

	ngOnInit(): void {
	}

	toggle() {
		// TODO: do todo toggle
	}

	remove() {
		// TODO: remove todo
	}

}
