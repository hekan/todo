import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewTodoComponent} from './new-todo.component';
import {Store} from '@ngrx/store';

describe('NewTodoComponent', () => {
	let component: NewTodoComponent;
	let fixture: ComponentFixture<NewTodoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NewTodoComponent],
			providers: [
				Store
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NewTodoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
