import { AccountService } from './../../../../services/account.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { User } from '../../../../interfaces/user.interface';
import { subscribeOn } from '../../../../../../node_modules/rxjs/operators';
import { log } from 'util';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/';
import { TaskService } from '../../../../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'okay-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss']
})
export class AssigneeComponent implements OnInit {
  @Input() taskId?: string;
  filterControl = new FormControl();
  users: User[];
  selectedUser: User;
@ViewChild('popover', {static: true}) popover: NgbPopover;


  constructor(
    private accountService: AccountService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.accountService.getAll().subscribe(users => {
      this.users = users as User[];
    });
  }

  async onSelect(user: User) {
    this.selectedUser = user;
    await this.taskService.assign({
      userId: this.accountService.user.id,
      taskId: this.taskId
    });
    this.popover.close();
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
