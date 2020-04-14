import { Injectable } from '@angular/core';
import { of, Observable, Subscription, BehaviorSubject } from 'rxjs';
import { IInput } from '../modules/generic/input/input.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  output: BehaviorSubject<IInput> = new BehaviorSubject(null);
  succeeds: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor() { }

  emit<T>(response: IInput): void {
    this.output.next(response);
  }
}
