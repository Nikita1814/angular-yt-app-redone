import { Pipe, PipeTransform } from '@angular/core';
import { ResponseVidInt } from '../models/yt-models';
import sortFuncs from '../utils/filter-functions';
@Pipe({
  name: 'wordSort',
})
export class WordSortPipe implements PipeTransform {
  transform(
    value: ResponseVidInt[],
    sortType: 'date' | 'views' | 'likes' | 'none'
  ): ResponseVidInt[] {
    if (sortType !== 'none') {
      const nuArr = [...value.sort(sortFuncs[sortType])];
      return nuArr;
    }
    return value;
  }
}
