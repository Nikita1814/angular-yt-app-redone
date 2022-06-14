import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLoggerComponent } from './components/error-logger/error-logger.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputAndErrorComponent } from './components/input-and-error/input-and-error.component';
import { AvatarSelectInputComponent } from './components/avatar-select-input/avatar-select-input.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';

@NgModule({
  declarations: [
    ErrorLoggerComponent,
    InputAndErrorComponent,
    AvatarSelectInputComponent,
    ErrorModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ErrorLoggerComponent, InputAndErrorComponent, AvatarSelectInputComponent, ErrorModalComponent]
})
export class SharedModule { }
