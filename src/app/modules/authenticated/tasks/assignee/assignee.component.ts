import { TaskService } from './../../../../services/task.service';
import { AccountService } from './../../../../services/account.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { User } from '../../../../interfaces/user.interface';
import { subscribeOn } from '../../../../../../node_modules/rxjs/operators';
import { log } from 'util';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/';
import { ITask } from '../../../../interfaces/task.interface';

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
@Input() task: ITask;


  constructor(
    private accountService: AccountService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.accountService.getAll().subscribe(users => {
      this.users = users as User[];
      console.log(this.users);
    });
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    this.taskService.assign({
      userId: this.selectedUser.id,
      taskId: this.task.id
    }).subscribe(val => {
      this.popover.close();
    });
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
