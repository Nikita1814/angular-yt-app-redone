import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchItemFacadeService } from 'src/app/redux/search-item-reducer/search-item-facade.service';
import { ResponseVideo } from '../../models/you-tube-models';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {
  constructor(public searchItemsFacade: SearchItemFacadeService) {}

  videoById(index: number, vid: ResponseVideo) {
    return vid.id;
  }
}
