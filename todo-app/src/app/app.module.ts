import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodosModule} from './todos/todos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {reducer} from './todos/store/todos.reducers';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		TodosModule,
		BrowserAnimationsModule,
		StoreModule.forRoot({ todos: reducer})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
