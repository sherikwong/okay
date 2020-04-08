import { Task } from './../../../../../interfaces/task.interface';
import { TaskService, AssignedTask } from './../../../../../services/task.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../../../../../interfaces/user.interface';
import { AccountService } from '../../../../../services/account.service';

@Component({
  selector: 'okay-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnChanges {
  @Input() taskId: string;
  queue: (Partial<User> & AssignedTask)[] = [];

  constructor(
    private taskService: TaskService,
    private accountService: AccountService
  ) {}

  ngOnChanges(): void {
    this.accountService.get('').subscribe(val => console.log(val));
    if (this.taskId) {
      console.log('Quering task');
      this.taskService.getQueue('1').pipe(
        map((queue: AssignedTask[]) => {
          const ordered = queue.sort((a ,b) => +a.dueDate + +b.dueDate);

          ordered.forEach(task => {
            console.log(this.accountService.users);
            this.queue.push({
              ...this.accountService.users.get(task.userId),
              // ...this.accountService.users.get(task.userId),
              ...task
            })
          })
        })
      ).subscribe();
    }
  }
}
