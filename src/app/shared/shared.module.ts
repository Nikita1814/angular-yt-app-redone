import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorLoggerComponent } from './components/error-logger/error-logger.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputAndErrorComponent } from './components/input-and-error/input-and-error.component';



@NgModule({
  declarations: [
    FormErrorLoggerComponent,
    InputAndErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [FormErrorLoggerComponent, InputAndErrorComponent]
})
export class SharedModule { }
