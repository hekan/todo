import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector: 't-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
