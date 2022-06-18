import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-input-and-error',
  templateUrl: './input-and-error.component.html',
  styleUrls: ['./input-and-error.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputAndErrorComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputAndErrorComponent implements ControlValueAccessor {
  @Input() type!: string;
  @Input() title!: string;
  @Input() errorsObj!: ValidationErrors | null;
  @Input() errorMsgs!: { [kind: string]: string };
  @Input() id!: string;
  @Input() control!: FormControl;
  @Input() controlName!: string;
  @Input() isTouched!: boolean;
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective!: FormControlDirective;
  public errorMsg!: string | null;
  private value!: string;
  constructor(public controlContainer: ControlContainer) {
    if (this.errorsObj)
      this.errorMsg =
        this.errorMsgs[`${Object.keys(this.errorsObj)[0]}`] || null;
  }

  getMsg(): string {
    return this.errorsObj && this.errorMsgs
      ? this.errorMsgs[`${Object.keys(this.errorsObj)[0]}`]
      : '';
  }

  registerOnTouched(fn: unknown): void {
    this.formControlDirective!.valueAccessor!.registerOnTouched(fn);
  }

  registerOnChange(fn: unknown): void {
    this.formControlDirective!.valueAccessor!.registerOnChange(fn);
  }

  writeValue(obj: unknown): void {
    this.formControlDirective!.valueAccessor!.writeValue(obj);
  }
}
