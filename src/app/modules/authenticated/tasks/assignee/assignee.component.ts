import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../../../interfaces/task.interface';
import { User } from '../../../../interfaces/user.interface';
import { AccountService } from '../../../../services/account.service';
import { TasksService } from '../../../../services/tasks.service';

@Component({
  selector: 'okay-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss']
})
export class AssigneeComponent implements OnInit {
  @Input() taskId?: string;
  filterControl = new FormControl();

  selectedUser: User;
  @ViewChild('popover', { static: true }) popover: NgbPopover;
  @Input() task: Task;


  constructor(
    public accountService: AccountService,
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
  }


  async onSelect(user: User) {
    console.log(user.firstName + 'selected...');
    this.selectedUser = user;
    await this.tasksService.assign({
      userId: this.accountService.user.id,
      taskId: this.taskId
    }).subscribe(val => console.log(val));
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

  get users(): any {
    const users = [];
    this.accountService.users.forEach(user => users.push(user));
    return users;
  }
}
