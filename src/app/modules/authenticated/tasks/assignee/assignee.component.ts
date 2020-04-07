import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/';
import { ITask } from '../../../../interfaces/task.interface';
import { User } from '../../../../interfaces/user.interface';
import { AccountService } from './../../../../services/account.service';
import { TaskService } from './../../../../services/task.service';

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
  @ViewChild('popover', { static: true }) popover: NgbPopover;
  @Input() task: ITask;


  constructor(
    private accountService: AccountService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.accountService.getAll().subscribe(users => {
      this.users = users;
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

  get userPhotoStyle(): { [key: string]: string } {
    return {
      backgroundImage: `url(${this.selectedUser.photoUrl})`
    };
  }

  get userName(): string {
    return this.selectedUser ? `${this.selectedUser.firstName} ${this.selectedUser.lastName}` : '';
  }
}
