import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Validators, FormBuilder } from '@angular/forms';
import { UserItemsFacadeService } from 'src/app/redux/user-items-reducer/user-items-facade.service';
import { UserCardInfo } from '../../models/yt-models';

@Component({
  selector: 'app-user-item-form',
  templateUrl: './user-item-form.component.html',
  styleUrls: ['./user-item-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemFormComponent {
  @Input() toggleFormVisibility: () => void;
  @Output() readonly formExit = new EventEmitter<void>();

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
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
    link: [
      '',
      {
        validators: [
          Validators.required,
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
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
  });

  constructor(
    private fb: FormBuilder,
    private userItemsFacade: UserItemsFacadeService
  ) {}

  handleSubmit() {
    if (this.cardForm.valid) {
      const userItem = {
        ...this.cardForm.value,
        id: `${Date.now()}`,
        date: this.cardForm.value.date.toString(),
      };
      this.userItemsFacade.setUserItems(userItem as UserCardInfo);
      this.exitForm();
    }
  }

  exitForm() {
    this.formExit.emit();
  }
}
