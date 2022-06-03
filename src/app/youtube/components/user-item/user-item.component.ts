import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserCardInfo } from '../../models/yt-models';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
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
