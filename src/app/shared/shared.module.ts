import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLoggerComponent } from './components/error-logger/error-logger.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputAndErrorComponent } from './components/input-and-error/input-and-error.component';



@NgModule({
  declarations: [
    ErrorLoggerComponent,
    InputAndErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ErrorLoggerComponent, InputAndErrorComponent]
})
export class SharedModule { }
