import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../services/task.service';
import { ITask } from '../../../../interfaces/task.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'okay-tasks-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(
    private tasksService: TaskService
  ) { }

  ngOnInit() {
    // this.tasks = this.tasksService.getAll();
    const task = {
      id: '1',
      name: 'Wash the dishes',
      dueDate: new Date(2011, 2, 3)
    } as ITask;

    new Array(10).fill('').forEach(() => this.tasks.push(task));
    console.log(this.tasks);
  }

  markAsCompleted(task: ITask, change: any) {
    console.log(change);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  swipeLeft(task: ITask) {
    console.log(task);
  }

  select() {

  }
}
