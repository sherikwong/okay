import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ITask } from '../interfaces/task.interface';
import { Item } from "../models/item.interface";
import { Query } from '../utils/query-string.utils';


export interface AssignedTask {
  userId: string;
  taskId: string;
  dueDate?: Date
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasksSubject = new BehaviorSubject<ITask[]>([] as ITask[]);

  constructor(
    private http: HttpClient
  ) {

  }

  private get _tasks(): ITask[] {
    return [];
    // return this._itemsSubject.value;
  }

  private set _tasks(items: ITask[]) {
    this._tasksSubject.next(items);
  }

  // Static data for one item
  // Should I allow internal access to items?
  public query(query: Query): any {
    const queryString = Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&');
    return this.http.get(`/tasks/query/${queryString}`).subscribe(val => console.log(val));
  }

  public getById(id: any): any {
    return this.http.get(`/tasks/${id}`);

  }
  // Static data for all
  // Should I allow internal access to items?
  public getAll(): any {
    return this.http.get('/tasks');
  }

  public update<T>(updated: ITask): Observable<Object> {
    const url = updated.id ? `/${updated.id}` : '';
    return this.http.post(`/tasks` + url, updated);
  }

  // Pipe item into Item class object to give functionality
  public subscribe(): Observable<ITask[]> {
    return this._tasksSubject.asObservable().pipe((
      map((tasks: ITask[]) => {
        return tasks;
      })
    ))
  }

  public assign(params: AssignedTask) {
    return this.http.post('/assignedTasks', params);
  }

  public getQueue(taskId: string) {
    return this.http.get(`/assignedTasks/${taskId}`);
  }
}
