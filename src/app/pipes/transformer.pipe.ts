import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformer',
  standalone: true,
})
export class TransformerPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
