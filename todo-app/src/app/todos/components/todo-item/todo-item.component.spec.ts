import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoItemComponent} from './todo-item.component';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {todosMockState} from '../../todos.mocks';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TodoModel} from '../../todo.model';

describe('TodoItemComponent', () => {
	let component: TodoItemComponent;
	let fixture: ComponentFixture<TodoItemComponent>;
	let todoItem: TodoModel;
	let store: MockStore;
	const initialState = {...todosMockState};
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TodoItemComponent],
			imports: [
				MatCardModule,
				MatFormFieldModule,
				MatButtonModule,
				MatInputModule,
				MatIconModule,
				FormsModule,
				MatCheckboxModule,
				ReactiveFormsModule,
				NoopAnimationsModule
			],
			providers: [
				provideMockStore({initialState}),
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.inject(MockStore);
		store.setState(initialState);
		fixture = TestBed.createComponent(TodoItemComponent);
		component = fixture.componentInstance;
		todoItem = {...todosMockState[0]};
		component.id = todoItem.id;
		component.value = todoItem.value;
		component.isDone = todoItem.isDone;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('should not have edit mode enabled by default', () => {
		expect(component.isEditMode).toBeFalse();
	});
	it('#toggle should toggle todo item', () => {
		/**
		 * Here we have a logic for checking store
		 */
	});
	it('#toggleEdit mode should toggle edit mode', () => {
		component.toggleEditMode();
		expect(component.isEditMode).toBeTrue();
		component.toggleEditMode();
		expect(component.isEditMode).toBeFalse();
	});
	it('#edit should push edited todo', () => {
		component.edit('new value');
		/**
		 * checking the state
		 */
	});
	it('#remove should remove the todo', () => {
		component.remove();
		/**
		 * checking the state
		 */
	});
});
