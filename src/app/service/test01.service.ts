import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class Test01Service {

  count: BehaviorSubject<number> = new BehaviorSubject(0);

  increment(num = 1): void {
    const current = this.count.getValue();
    this.count.next(current + num);
  }

  decrement(num = 1): void {
    const current = this.count.getValue();
    this.count.next(current - num);
  }
}
