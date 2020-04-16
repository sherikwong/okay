import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';
import { ModalData } from './../modules/generic/list-modal/list-modal.component';
import { IInput } from '../modules/generic/input/input.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  output: Subject<IInput> = new Subject();
  succeeds: Subject<boolean> = new Subject();

  constructor() { }

  emit<T>(response: IInput): void {
    if (response) {
      this.output.next(response);
    }
  }
}