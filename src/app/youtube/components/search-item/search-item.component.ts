import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ResponseVideo } from '../../models/you-tube-models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent implements OnInit {
  @Input() video: ResponseVideo;
  imgUrl: string;
  stringifiedVideo: string;
  constructor() {}

  ngOnInit(): void {
    this.imgUrl = this.video.snippet.thumbnails.high.url;
    this.stringifiedVideo = JSON.stringify(this.video);
  }
}
