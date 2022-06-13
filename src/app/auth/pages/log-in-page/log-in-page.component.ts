import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateUser } from 'src/app/redux/auth-reducer/auth.actions';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
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
    console.log('Handling sign in')
    if (this.logInForm.valid) {
      this.store.dispatch(
        updateUser({ user: { ...this.logInForm.value, token: 'I am a token' } })
      );
      this.router.navigateByUrl('');
    }
  }
  getErrorMsg(
    errorObj: ValidationErrors | null,
    errorMsgs: { [kind: string]: string }
  ) {
    return errorObj && errorMsgs
      ? errorMsgs[`${Object.keys(errorObj)[0]}`]
      : '';
  }
  ngOnInit(): void {
  }
}
