import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosListComponent} from './todos-list.component';
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
import {TodoItemComponent} from '../todo-item/todo-item.component';

describe('TodosListComponent', () => {
	let component: TodosListComponent;
	let fixture: ComponentFixture<TodosListComponent>;
	let store: MockStore;
	const initialState = {...todosMockState};
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TodosListComponent, TodoItemComponent],
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
		fixture = TestBed.createComponent(TodosListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('should have todos', async( () => {
		component.todos$.subscribe(
			items => {
				expect(items).toBe(initialState.todos);
			}
		);
	}));
});
