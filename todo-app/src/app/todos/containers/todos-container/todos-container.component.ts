import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector: 't-todos-container',
	templateUrl: './todos-container.component.html',
	styleUrls: ['./todos-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosContainerComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
