import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  ResponseVideo,
  Statistics,
  UserCardInfo,
} from '../../models/you-tube-models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent implements OnInit {
  @Input() video: ResponseVideo | UserCardInfo;
  imgUrl: string;
  stringifiedVideo: string;
  description: string;
  statistics: Statistics;
  link: string;
  title: string;
  constructor() {}

  ngOnInit(): void {
    if ('snippet' in this.video) {
      console.log('snippet');
      this.imgUrl = this.video.snippet.thumbnails.high.url;
      this.description = this.shortenDescription(
        this.video.snippet.description
      );
      this.statistics = this.video.statistics;
      this.title = this.video.snippet.title;
      this.link = '';
    } else {
      this.imgUrl = this.video.img;
      this.description = this.shortenDescription(this.video.description);
      this.link = this.video.link;
      this.title = this.video.title;
    }

    this.stringifiedVideo = JSON.stringify(this.video);
  }
  
  shortenDescription(description: string) {
    return description.length > 300
      ? description.slice(0, 300) + '...'
      : description;
  }
}
