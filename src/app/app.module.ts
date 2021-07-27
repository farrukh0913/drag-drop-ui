import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
  imports: [BrowserModule, FormsModule, NgDragDropModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
