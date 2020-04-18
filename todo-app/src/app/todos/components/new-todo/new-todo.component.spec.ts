import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewTodoComponent} from './new-todo.component';
import {Store} from '@ngrx/store';
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
import {cold} from 'jasmine-marbles';
import {TodoModel} from '../../todo.model';
import {reducer} from '../../store/todos.reducers';


describe('NewTodoComponent', () => {
	let component: NewTodoComponent;
	let fixture: ComponentFixture<NewTodoComponent>;
	let store: MockStore;
	const initialState = {...todosMockState};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NewTodoComponent],
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

		}).compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.inject(MockStore);
		store.setState(initialState);
		fixture = TestBed.createComponent(NewTodoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('should have empty new todo on creation', () => {
		expect(component.newTodo).toBe('');
	});
	it('#isValid should say if new todo us ok to add', () => {
		expect(component.isValid).toBeFalse();
		component.newTodo = '  ';
		expect(component.isValid).toBeFalse();
		component.newTodo = '  new todo';
		expect(component.isValid).toBeTrue();
	});
	it('#add should add new todo to the store and flush new todo placeholder', async(() => {
			component.newTodo = 'Lear Physics';
			component.add();
			fixture.detectChanges();
			expect(component.newTodo).toBe('');
		}
	));
});
