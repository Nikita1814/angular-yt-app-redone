import { AbstractControl } from '@angular/forms';

export function ValidateImgLink(control: AbstractControl) {
  const value = control.value;
  const isImg = /\.(jpeg|jpg|gif|png)$/.test(control.value);
  return !isImg ? { imgLinkInvalid: true } : null;
}
