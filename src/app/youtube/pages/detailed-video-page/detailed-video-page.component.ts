import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ResponseVidInt } from '../../models/yt-models';

@Component({
  selector: 'app-detailed-video-page',
  templateUrl: './detailed-video-page.component.html',
  styleUrls: ['./detailed-video-page.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedVideoPageComponent implements OnInit {
  vidUrl: SafeUrl
  unsafeVidUrl: string
  itemId!: string;
  item!: ResponseVidInt;
  vidDate!: Date;
  constructor(
    public route: ActivatedRoute,
    private sanitizer : DomSanitizer
  ) {

  }
  ngOnInit(): void {
    this.itemId = this.route.snapshot.params['id']
    this.item = history.state.data

    this.vidDate = new Date(this.item.snippet.publishedAt);
    //JSON.parse(history.state.data);
    this.unsafeVidUrl = `https://www.youtube.com/embed/${this.item.id}`
    this.vidUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeVidUrl)
    console.log(history)
  }
}
