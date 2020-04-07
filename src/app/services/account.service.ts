import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { User } from '../interfaces/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private user_obsv: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) {
    this.authService.authState.subscribe(user => {
      this.userFromDb(user).subscribe(user => this.user = user);
    });
  }

  public get user(): User {
    return this.user_obsv.value;
  }

  public set user(user: User) {
    this.user_obsv.next(user);
  }

  public getAll(): Observable<User[]> {
    return this.http.get('/users').pipe(
      map(users => users as User[]));
  }

  public get getUpdatedUser(): Observable<User> {
    return this.user_obsv.asObservable();
  }

  public login(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  private userFromDb(user: User): Observable<User> {
    const id = user.id;
    delete user.id;
    return this.http.post('/users', {
      ...user,
      id
    }).pipe(
      map(user => user as User)
    );
  }
}
