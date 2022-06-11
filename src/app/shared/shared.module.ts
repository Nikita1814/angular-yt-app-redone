import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLoggerComponent } from './components/error-logger/error-logger.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputAndErrorComponent } from './components/input-and-error/input-and-error.component';
import { AvatarSelectInputComponent } from './avatar-select-input/avatar-select-input.component';



@NgModule({
  declarations: [
    ErrorLoggerComponent,
    InputAndErrorComponent,
    AvatarSelectInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ErrorLoggerComponent, InputAndErrorComponent, AvatarSelectInputComponent]
})
export class SharedModule { }
