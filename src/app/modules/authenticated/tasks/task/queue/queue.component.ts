import { Observable } from 'rxjs';
import { Task } from '../../../../../interfaces/task.interface';
import { TasksService, AssignedTask } from '../../../../../services/tasks.service';
import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../../../../../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { AssigneeComponent } from '../../assignee/assignee.component';

@Component({
  selector: 'okay-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],

})
export class QueueComponent implements OnChanges {
  @Input() taskId: string;
  private _queue: (Partial<User> & AssignedTask)[] = [];
  public queue: Observable<(Partial<User> & AssignedTask)[]>;
  // @ViewChild(MatStepperIcon, {static: false}) icon: MatStepperIcon;

  constructor(
    private taskService: TasksService,
    public dialog: MatDialog
  ) {}

  ngOnChanges(): void {
    if (this.taskId) {
      this.queue = this.taskService.getQueue('1').pipe(
        map((queue: AssignedTask[]) => {
          const ordered = queue.sort((a ,b) => +a.dueDate + +b.dueDate);

          ordered.forEach(task => this._queue.push(task));
          return this._queue;
      }));

      this.queue.subscribe(queue => {
        console.log('Subscribed', queue);
      });
    }
  }




  public reorder(event): void {

  }


  public add(): void {
    this.dialog.open(AssigneeComponent, {
      data: {
        taskId: this.taskId
      }
    })

  }
}
