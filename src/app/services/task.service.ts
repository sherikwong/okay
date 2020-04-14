import { Task } from './../interfaces/task.interface';
import { Injectable } from '@angular/core';
import { TasksService, AssignedTask } from './tasks.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _task: Task;
  private _assignedTask: AssignedTask;

  constructor(
    private tasksService: TasksService
  ) { }

  public get(assignedTask: AssignedTask): void {
    this._assignedTask = assignedTask;

    this.tasksService.getById(assignedTask.taskId).subscribe(task => {
      this._task = task;
    })
  }

  public get name(): string {
    return this._task
    ? this._task.name
    : '';
  }

  public get dueDate(): Date {
    return this._assignedTask
    ? this._assignedTask.dueDate
    : new Date();
  }

  public get id(): string {
    return this._assignedTask.taskId;
  }

}
