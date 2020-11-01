import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'num'
})
export class NumPipe implements PipeTransform {
  transform(value: number): string {
    if(value < 0) {
      return value + " (negative)";
    } else if(value > 0) {
      return value + " (positive)";
    } else {
      return value + " (zero)";
    }
  }
}
