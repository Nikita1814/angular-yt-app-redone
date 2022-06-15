import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-logger',
  templateUrl: './error-logger.component.html',
  styleUrls: ['./error-logger.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLoggerComponent {
  @Input() error: string;
}
