import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    console.log('Authenticating user...');

    return of(null).pipe(
      delay(2000),
      map(() => {
        console.log('User', this.accountService.user)
        if (this.accountService.user) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      })
    );
  }
}
