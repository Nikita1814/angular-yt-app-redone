import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-avatar-select-input',
  templateUrl: './avatar-select-input.component.html',
  styleUrls: ['./avatar-select-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvatarSelectInputComponent),
      multi: true,
    },
  ],
})
export class AvatarSelectInputComponent {
  @Input() controlName!: string;
  avatars = ['avatar-m', 'avatar-f', 'avatar-x'];
  constructor() {}
  selected!: string;
  disabled = false;
  private onTouched!: Function;
  private onChanged!: Function;

  selectAvatar(avatar: string) {
    this.onTouched();
    this.selected = avatar;
    this.onChanged(avatar);
  }

  writeValue(value: string): void {
    this.selected = value ?? 'avatar-x';
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
