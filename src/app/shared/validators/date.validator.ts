import { AbstractControl } from '@angular/forms';

export function ValidateDate(control: AbstractControl) {
  const value = control.value;
  const today = Date.now();
  const isValidDate = new Date(value).getTime() > today;
  return !isValidDate ? { dateInvalid: true } : null;
}
