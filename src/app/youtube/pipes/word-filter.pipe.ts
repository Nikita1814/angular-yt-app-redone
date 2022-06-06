import { Pipe, PipeTransform } from '@angular/core';
import { ResponseVidInt } from '../models/yt-models';


@Pipe({
  name: 'wordFilter',
})
export class WordFilterPipe implements PipeTransform {
  transform(value: ResponseVidInt[], str: string): Array<ResponseVidInt> {
    return value.filter((el) => el.snippet.title.toLowerCase().includes(str));
  }
}
