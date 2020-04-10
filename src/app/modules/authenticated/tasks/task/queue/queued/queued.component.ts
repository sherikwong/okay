import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../../../interfaces/user.interface';
import { AccountService } from '../../../../../../services/account.service';
import { AssignedTask, TaskService } from './../../../../../../services/task.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'okay-queued',
  templateUrl: './queued.component.html',
  styleUrls: ['./queued.component.scss']
})
export class QueuedComponent implements OnInit {
  @Input() task: AssignedTask = {} as AssignedTask;
  @Input() index: number;
  selectedUser: User;
  filterControl = new FormControl();

  constructor(
    private accountService: AccountService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {

  }

  public get userImage(): {[key: string]: string} {
    const user =  this.accountService.users.get(this.task.userId);
    return user
    ? {'background-image': `url(${user.photoUrl})`}
    : {};
  }

  public get userName(): string {
    const user =  this.accountService.users.get(this.task.userId);
    return user
    ? `${user.firstName} ${user.lastName}`
    : '';
  }


  async onSelect(user: User) {
    console.log(user.firstName + 'selected...');
    this.selectedUser = user;
    await this.taskService.assign({
      userId: this.accountService.user.id,
      taskId: this.task.taskId
    }).subscribe(val => console.log(val));
  }

  get userPhotoStyle(): { [key: string]: string } {
    return {
      backgroundImage: `url(${this.selectedUser.photoUrl})`
    };
  }

  get users(): any {
    const users = [];
    this.accountService.users.forEach(user => users.push(user));
    return users;
  }

  get isNewEntry(): boolean {
    return !(this.task && this.task.taskId && this.index >= 0);
  }
}
