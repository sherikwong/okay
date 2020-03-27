import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
// import { tasks } from '../../../../dummy';
import { ITask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks = new BehaviorSubject(new Map<string, ITask>());
  private _subscription: Subscription;
  private _tasksMap: Map<string, ITask>;

  constructor(
    // private httpService: any
  ) {
    // this.load();
  }

  // Load all tasks
  // Paginate

  // Static data for one ITask
  // Should I allow internal access to tasks?
  public get(id: string): ITask {
    return this._tasksMap.get(id);
  }

  public getAll(): Map<string, ITask> {
    return this.tasks.getValue();
  }

  public update<T>(ITask: ITask): void {

  }
}
