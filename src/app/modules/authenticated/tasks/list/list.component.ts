import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../services/task.service';
import { ITask } from '../../../../interfaces/task.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'okay-tasks-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: ITask[];

  constructor(
    private tasksService: TaskService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.tasks = this.tasksService.getAll();
    // const task = {
    //   id: '1',
    //   name: 'Wash the dishes',
    //   dueDate: new Date(2011, 2, 3)
    // } as ITask;
  }

  markAsCompleted(task: ITask, change: any) {
    this.tasksService.update({...task, completed: change.checked});
  }

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  select(task: ITask) {
    this.router.navigate(['tasks', task.id]);
  }
}
