import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { OverlayRoutes } from '../components/custom/overlay/overlay.routing';

export enum BackgroundColor {
  Primary = 'primary',
  Accent = 'accent',
  Warning = 'warn'
}

const routeColors = new Map([
  [OverlayRoutes.Menu, BackgroundColor.Accent],
]);

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  public _opened_subj: BehaviorSubject<BackgroundColor | undefined> = new BehaviorSubject(undefined);
  public get opened(): BackgroundColor | undefined { return this._opened_subj.value; }

  constructor(
    private router: Router
  ) {
  }

  public open(route: OverlayRoutes): void {
    const color = routeColors.get(route);
    console.log(color);
    this._opened_subj.next(color);
    console.log(this.opened);
    this.router.navigate([{
      outlets: {
        overlay: OverlayRoutes.Menu
      }
    }], { skipLocationChange: true });
  }

  public close(): void {
    this._opened_subj.next(undefined);
  }
}
