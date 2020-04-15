import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector: 't-new-todo',
	templateUrl: './new-todo.component.html',
	styleUrls: ['./new-todo.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTodoComponent implements OnInit {

	constructor() {
	}

	get isValid(): boolean {
		// TODO: do validation of the input
		return true;
	}

	ngOnInit(): void {
	}

	add() {
		// TODO: add todo
	}

	clear() {
		// TODO: reset input field
	}

}
