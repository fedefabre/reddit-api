import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {
  
  transform(value: any, args?: any): any {
    const relative = new Date(value);
    return Math.round(relative.getTime()/(1000 * 60 * 60  * 24) ) + ' hours ago'; ;
  }

}
