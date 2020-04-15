import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {TodosListComponent} from './components/todos-list/todos-list.component';
import {NewTodoComponent} from './components/new-todo/new-todo.component';
import {TodosContainerComponent} from './containers/todos-container/todos-container.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';


@NgModule({
	declarations: [TodoItemComponent, TodosListComponent, NewTodoComponent, TodosContainerComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatFormFieldModule,
		MatButtonModule,
		MatInputModule,
		MatIconModule,
		FormsModule
	],
	exports: [TodosContainerComponent]
})
export class TodosModule {
}
