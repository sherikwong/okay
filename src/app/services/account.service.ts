import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private user_obsv: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(
    private authService: AuthService
  ) {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
  }

  public get user(): User {
    return this.user_obsv.value;
  }

  public set user(user: User) {
    this.user_obsv.next(user);
  }

  public get getUpdatedUser(): Observable<User> {
    return this.user_obsv.asObservable();
  }

  public login(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
