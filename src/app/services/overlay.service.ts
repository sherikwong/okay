import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { OverlayRoutes } from '../enums/routes.enum';

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
  private _opened_subj: BehaviorSubject<OverlayRoutes> = new BehaviorSubject(undefined);
  public get opened(): OverlayRoutes { return this._opened_subj.value; }

  constructor(
    private router: Router
  ) {
  }

  public open(route: OverlayRoutes): void {
    this._opened_subj.next(route);
  }

  public close(): void {
    this._opened_subj.next(null);
  }

  public color(): BackgroundColor {
    return routeColors.get(this.opened);
  }
}
