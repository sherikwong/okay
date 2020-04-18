import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ModalData } from './../modules/generic/list-modal/list-modal.component';
import { IInput } from '../modules/generic/input/input.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  output: Subject<IInput> = new Subject();
  succeeds: Subject<boolean> = new BehaviorSubject(null);

  constructor() { }

  emit<T>(response: IInput): void {
    this.output.next(response);
  }
}
