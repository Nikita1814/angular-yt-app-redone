import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserCardInfo } from '../../models/yt-models';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent implements OnInit {
  @Input() userVid: UserCardInfo;
  imgUrl: string;

  constructor() {}

  ngOnInit(): void {
    this.imgUrl = this.userVid.img;
  }
}
