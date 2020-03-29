import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OverlayRoutes, overlayRoutes } from '../components/custom/overlay/overlay.routing';

export enum BackgroundColor {
  Primary = 'primary',
  Accent = 'accent',
  Warning = 'warn'
}

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private _opened_subj: BehaviorSubject<BackgroundColor | undefined> = new BehaviorSubject(undefined);
  public get opened(): BackgroundColor | undefined {
    console.log(this._opened_subj.value);
    return this._opened_subj.value;
  }


  constructor() { }

  public open(route: OverlayRoutes): void {
    const color = [...overlayRoutes].find(data => route === data.path).data.color;
    this._opened_subj.next(color);
  }

  public close(): void {
    this._opened_subj.next(undefined);
  }
}
