import { Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public user: any;

  constructor(
    private authService: AuthService
  ) {
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

  public login(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
