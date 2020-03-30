import { Injectable } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    return this.accountService.getUpdatedUser.pipe(
      map(user => {
        if (!user) {
          console.log('There is no user.')
          return false;
        }
        if (next.url[0].path === '/home') {
          return false;
        }
        console.log('User exists. Redirecting to home');
        this.router.navigate(['/home']);
        return true;
      })
    );
  }
}
