import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Car } from './car.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ Car],
  bootstrap: [AppComponent]
})
export class AppModule { }
