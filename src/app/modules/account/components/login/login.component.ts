import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'okay-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    console.log('Hello', GoogleLoginProvider.PROVIDER_ID);
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
