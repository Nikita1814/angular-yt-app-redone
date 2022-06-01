import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error-logger',
  templateUrl: './form-error-logger.component.html',
  styleUrls: ['./form-error-logger.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorLoggerComponent {
  @Input() error: ValidationErrors | undefined | null;
}
