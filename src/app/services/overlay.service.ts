import { Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { OverlayRoutes } from '../enums/routes.enum';
import { delay } from 'q';

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
  private _opened_subj: BehaviorSubject<BackgroundColor | string> = new BehaviorSubject(undefined);
  public get opened(): BackgroundColor | string { return this._opened_subj.value; }
  public expandBackground = '';
  constructor(
    private router: Router
  ) {
  }

  public open(route: OverlayRoutes): void {
    const color = routeColors.get(route);
    this._opened_subj.next(color);
    this.router.navigate([{
      outlets: {
        overlay: OverlayRoutes.Menu
      }
    }], { skipLocationChange: true });
    setTimeout(() => this.expandBackground = 'okay-overlay__background--open', 100);
  }

  public close(): void {
    setTimeout(() => this.expandBackground = '', 100);
    this._opened_subj.next('');
  }

  public get backgroundClass(): string {
    return this.opened
    ? `okay-overlay__background--${this.opened}`
    : '';
  }
}
