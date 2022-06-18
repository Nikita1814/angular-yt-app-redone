import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserCardInfo } from '../../models/you-tube-models';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent implements OnInit {
  @Input() userVideo: UserCardInfo;
  imgUrl: string;

  constructor() {}

  ngOnInit(): void {
    this.imgUrl = this.userVideo.img;
  }
}
