import { Pipe, PipeTransform } from '@angular/core';
import { ResponseVidInt } from '../models/yt-models';
import sortFuncs  from '../utils/filter-functions'
@Pipe({
  name: 'wordSort'
})
export class WordSortPipe implements PipeTransform {

  transform(value: ResponseVidInt[], sortType: 'date' | 'views' | 'likes' | 'none'): ResponseVidInt[] {
    //return value.filter((el) => el.snippet.title.toLowerCase().includes(str));l;
    //return sortType !== 'none' ? value.sort(sortFuncs[sortType]) : value
    if (sortType !== 'none'){
      const nuArr = [...value.sort(sortFuncs[sortType])]
      console.log('sortedArr', nuArr)
      return nuArr
    }
    return value
  }

}
