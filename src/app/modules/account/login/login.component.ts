import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service';

@Component({
  selector: 'okay-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

}
