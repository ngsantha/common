import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { FormsModule, ReactiveFormsModule } from '@ngsantha/strongly-typed-forms';

@NgModule({
  declarations: [
    AppComponent,
    TypedFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
