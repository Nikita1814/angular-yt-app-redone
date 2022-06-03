import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { ResponseVidInt } from '../../models/yt-models';
/*import { ResponseVidInt } from 'src/app/youtube/models/response-vid-model';
import { ResponseManagementService } from '../../services/response-management.service';*/

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent implements OnInit {
  @Input() vidObj: ResponseVidInt;
  imgUrl: string;
  constructor(/*public respService: ResponseManagementService*/) {}

  ngOnInit(): void {
    this.imgUrl = this.vidObj.snippet.thumbnails.high.url;
  }

  selectDetailed() {
    /*this.respService.selectedVid = this.vidObj;*/
  }
}
