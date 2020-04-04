import { AccountService } from './../../../../services/account.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../../interfaces/user.interface';
import { subscribeOn } from '../../../../../../node_modules/rxjs/operators';
import { log } from 'util';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/popover/popover';

@Component({
  selector: 'okay-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss']
})
export class AssigneeComponent implements OnInit {
  filterControl = new FormControl();
  users: User[];
  selectedUser: User;
@ViewChild('popover', {static: true}) popover: NgbPopover;


  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.getAll().subscribe(users => {
      this.users = users as User[];
    });
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    console.log(this.popover);
  }

  get userPhotoStyle(): {[key: string]: string} {
    return {
      backgroundImage: `url(${this.selectedUser.photoUrl})`
    };
  }

  get userName(): string {
    return this.selectedUser ? `${this.selectedUser.firstName} ${this.selectedUser.lastName}` : '';
  }
}
