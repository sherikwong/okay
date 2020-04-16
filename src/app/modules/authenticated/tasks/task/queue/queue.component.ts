import { IInput } from './../../../../generic/input/input.component';
import { DataService } from './../../../../../services/data.service';
import { Observable } from 'rxjs';
import { Task, AssignedTask } from '../../../../../interfaces/task.interface';
import { TasksService } from '../../../../../services/tasks.service';
import { Component, OnInit, Input, OnChanges, ViewChild, Injector } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { User } from '../../../../../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { AssigneeComponent } from '../../assignee/assignee.component';
import { ListModalComponent } from '../../../../generic/list-modal/list-modal.component';
import { AccountService } from '../../../../../services/account.service';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'okay-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],

})
export class QueueComponent implements OnChanges, OnInit {
  @Input() task: Task = {id: '1', name: 'Blah'} as Task;
  private _queue: (Partial<User> & AssignedTask)[] = [];
  public queue: (Partial<User> & AssignedTask)[];


  constructor(
    private taskService: TasksService,
    public dialog: MatDialog,
    private dataService: DataService,
    private accountService: AccountService,
    private injector: Injector
  ) { }

  ngOnChanges(): void {
    if (this.task.id) {

    }
  }

  ngOnInit(): void {
    this.getQueue().subscribe();
    this.addToDb().subscribe();
  }

  public reorder(event): void {

  }

  public openAddModal(): void {
    this.dialog.open(ListModalComponent, {
      data: {
        options: this.users
      }
    })
  }


  get users(): { [id: string]: string } {
    const users = {};
    this.accountService.users.forEach(user => users[user.id] = `${user.firstName} ${user.lastName}`);
    return users;
  }

  private getQueue(): Observable<any> {
    return this.taskService.getQueue(this.task.id).pipe(
      tap((queue: AssignedTask[]) => {
        const ordered = queue.sort((a, b) => +a.dueDate + +b.dueDate);
        this.queue = ordered;
        console.log(ordered);
      }));
  }

  private addToDb(): Observable<any> {
    return this.dataService.output.pipe(tap(async (selected) => {
      const assignment = {
        userId: selected.value,
        taskId: this.task.id
      };

      try {
        await this.taskService.assign(assignment).toPromise();
        this.queue.push(assignment);
        this.dialog.closeAll();
      } catch (error) {
        console.error('Couldn\'t save');
      }
    }));
  }
}
