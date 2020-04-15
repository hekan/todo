import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector: 't-todos-list',
	templateUrl: './todos-list.component.html',
	styleUrls: ['./todos-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
