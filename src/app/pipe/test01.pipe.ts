import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test01'
})
export class Test01Pipe implements PipeTransform {

  transform(value: string, length: number = 50 , ommission: string = '...'): any {
    if ( value.length < length) {
      return value;
    } else {
      return value.substring(0 , length - 1) + ommission;
    }
  }

}
