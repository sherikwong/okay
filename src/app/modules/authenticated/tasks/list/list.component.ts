import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../services/task.service';
import { ITask } from '../../../../interfaces/task.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'okay-tasks-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: ITask[];

  constructor(
    private tasksService: TaskService,
    private snackBar: MatSnackBar
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
    console.log(change);
    // this.tasksService.update({...task, completed: true});
  }

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  swipeLeft(task: ITask) {
    console.log(task);
  }

  select() {

  }
}
