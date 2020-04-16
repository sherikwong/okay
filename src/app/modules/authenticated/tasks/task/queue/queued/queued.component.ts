import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AssignedTask } from '../../../../../../interfaces/task.interface';
import { User } from '../../../../../../interfaces/user.interface';
import { AccountService } from '../../../../../../services/account.service';
import { TasksService } from '../../../../../../services/tasks.service';
import { UserService } from '../../../../../../services/user.service';

@Component({
  selector: 'okay-queued',
  templateUrl: './queued.component.html',
  styleUrls: ['./queued.component.scss'],
  providers: [UserService]
})
export class QueuedComponent implements OnInit {
  @Input() task: AssignedTask = {} as AssignedTask;
  @Input() index: number;
  selectedUser: User;
  filterControl = new FormControl();

  constructor(
    private accountService: AccountService,
    private taskService: TasksService,
    public user: UserService
  ) { }

  ngOnInit(): void {
    this.user.getFromTask(this.task);

  }

  async onSelect(user: User) {
    console.log(user.firstName + 'selected...');
    this.selectedUser = user;
    await this.taskService.assign({
      userId: this.accountService.user.id,
      taskId: this.task.taskId
    }).subscribe(val => console.log(val));
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
