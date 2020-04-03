import { AccountService } from './../../../../services/account.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../../interfaces/user.interface';

@Component({
  selector: 'okay-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.css']
})
export class AssigneeComponent implements OnInit {
  formControl = new FormControl();
  users: User[];

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.getAll().subscribe(users => {
      this.users = users as User[];
    })
  }
}
