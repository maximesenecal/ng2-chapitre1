import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TodoComponent } from './todo/todo.component';
import 'hammerjs';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    TodoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
