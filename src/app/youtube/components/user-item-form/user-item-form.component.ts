import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PageState } from 'src/app/redux/state-related-models';
import { updateUserItems } from 'src/app/redux/user-items-reducer/user-items.action';
import { ValidateDate } from 'src/app/shared/valiidators/date.validator';
import { ValidateImgLink } from 'src/app/shared/valiidators/img-link.validator';
import { UserCardInfo } from '../../models/yt-models';


@Component({
  selector: 'app-user-card-form',
  templateUrl: './user-card-form.component.html',
  styleUrls: ['./user-card-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemFormComponent {
  @Input() toggleFormVisibility: () => void;
  @Input() addCard: (card: UserCardInfo) => void;
  @Output() formSubmission = new EventEmitter<UserCardInfo>();
  @Output() formExit = new EventEmitter<void>();

  cardForm = this.fb.group({
    title: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
        updateOn: 'change',
      },
    ],
    description: [
      '',
      {
        validators: [Validators.maxLength(255)],
        updateOn: 'change',
      },
    ],
    img: [
      '',
      {
        validators: [ValidateImgLink],
        updateOn: 'change',
      },
    ],
    link: [
      '',
      {
        validators: [
          Validators.pattern(
            /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
          ),
        ],
        updateOn: 'change',
      },
    ],
    date: [
      '',
      {
        validators: [ValidateDate],
        updateOn: 'change',
      },
    ],
  });

  constructor(private fb: FormBuilder, private store: Store<PageState>) {}

  handleSubmit() {
    if (this.cardForm.valid) {
      this.formSubmission.emit(this.cardForm.value as UserCardInfo);
      this.store.dispatch(
        updateUserItems({userItem: this.cardForm.value as UserCardInfo})
      );
    }
  }

  exitForm() {
    this.formExit.emit();
  }
}
