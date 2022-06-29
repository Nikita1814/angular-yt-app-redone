import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInPageComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authFacade: AuthFacadeService
  ) {}

  logInForm = this.fb.group({
    login: ['', { validators: [Validators.required, Validators.email] }],
    password: [
      '',
      {
        validators: [
          Validators.required,
          Validators.pattern(/[A-Za-z0-9!@#?]/),
        ],
      },
    ],
    avatar: ['avatar-x'],
  });

  handleSignIn() {
    if (this.logInForm.valid) {
      this.authFacade.setUser({
        ...this.logInForm.value,
        token: 'I am a token',
      });
      this.router.navigateByUrl('');
    }
  }

  getErrorMsg(
    errorObj: ValidationErrors | null,
    errorMsgs: { [kind: string]: string }
  ) {
    if (errorObj && errorMsgs) {
      return errorMsgs[`${Object.keys(errorObj)[0]}`];
    } else {
      return '';
    }
  }
}
