import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private user_obsv: BehaviorSubject<User> = new BehaviorSubject(null);
  private _users?: Map<string, User>;

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) {}

  public get user(): User {
    return this.user_obsv.value;
  }

  public set user(user: User) {
    this.user_obsv.next(user);
  }

  public get users(): Map<string, User> {
    if (!this._users) {
      this._users = new Map();
      console.log('User');
      this.http.get('/users').pipe(
        tap((users: User[]) => users.forEach(user => this._users.set(user.id, user))),
      ).subscribe();
    }
    return this._users;
  }

  public get getUpdatedUser(): Observable<User> {
    return this.user_obsv.asObservable();
  }

  public async login(): Promise<void> {
    const currentUser = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.storeInDb(currentUser);
  }

  private storeInDb(user: SocialUser): Observable<User> {
    const id = user.id;
    delete user.id;
    return this.http.post('/users', {
      ...user,
      id
    }).pipe(
      map(user => user as User)
    );
  }

  public get(id: string): Observable<User> {
    return this.http.get(`/users/${id}`).pipe(map(user => user as User));
  }
}
