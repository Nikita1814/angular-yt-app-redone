import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ResponseVideo } from '../../models/yt-models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent implements OnInit {
  @Input() vidObj: ResponseVideo;
  imgUrl: string;
  stringifiedVidObj: string;
  constructor() {}

  ngOnInit(): void {
    this.imgUrl = this.vidObj.snippet.thumbnails.high.url;
    this.stringifiedVidObj = JSON.stringify(this.vidObj);
  }
}
