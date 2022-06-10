import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateUser } from 'src/app/redux/auth-reducer/auth.action';
import { PageState } from 'src/app/redux/state-related-models';
@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store<PageState>,
    private router: Router
  ) {}
  logInForm = this.fb.group({
    login: ['', { validators:  [Validators.required, Validators.email] }],
    password: ['', { validators: [Validators.required, Validators.pattern(/[A-Za-z0-9!@#?]/)] }],
  });

  ngOnInit(): void {}
  handleSignIn() {
    if (this.logInForm.valid) {
      this.store.dispatch(
        updateUser({ user: { ...this.logInForm.value, token: 'I am a token' } })
      );
      this.router.navigateByUrl('');
    }
  }
}
