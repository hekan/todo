import {Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef} from '@angular/core';
import {Store} from '@ngrx/store';
import {edit, remove} from '../../store/todos.actions';
import {isValidTodoText} from '../../todos.utils';

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
	@ViewChild('editField') editField: ElementRef;
	isEditMode: boolean;

	constructor(private store: Store) {
		this.setDefaultMode();
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

	toggleEditMode() {
		this.isEditMode = !this.isEditMode;
		if (this.isEditMode) {
			window.setTimeout(() => {
				this.editField.nativeElement.focus();
			}, 10);
		}
	}

	setDefaultMode() {
		this.isEditMode = false;
	}

	edit(editedText: string) {
		if (!isValidTodoText(editedText)) {
			return;
		}

		const isTheSame = editedText === this.value;
		if (!isTheSame) {
			this.store.dispatch(edit(
				{
					todo: {
						isDone: this.isDone,
						value: editedText,
						id: this.id
					}
				}
			));
		} else {
			this.setDefaultMode();
		}
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
