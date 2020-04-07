import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Task } from '../interfaces/task.interface';
import { Item } from "../models/item.interface";
import { Query } from '../utils/query-string.utils';

export interface TaskAssignment {
  taskId: string;
  userId: string;
  dueDate?: Date;
}


export interface AssignedTask {
  userId: string;
  taskId: string;
  dueDate?: Date
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasksSubject = new BehaviorSubject<Task[]>([] as Task[]);

  constructor(
    private http: HttpClient
  ) {

  }

  private get _tasks(): Task[] {
    return [];
    // return this._itemsSubject.value;
  }

  private set _tasks(items: Task[]) {
    this._tasksSubject.next(items);
  }

  // Static data for one item
  // Should I allow internal access to items?
  public query(query: Query): Observable<Task[]> {
    if (query) {
      const queryString = Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&');
      return this.http.get(`/tasks/query/${queryString}`).pipe(map(
        tasks => tasks as Task[]
      ));
    }
  }

  public getById(id: string): Observable<Task> {
    if (id) {
      return this.http.get(`/tasks/${id}`).pipe(map(task => task as Task));
    }
  }
  // Static data for all
  // Should I allow internal access to items?
  public getAll(): Observable<Task[]> {
    return this.http.get('/tasks').pipe(map(
      tasks => tasks as Task[]
    ));;
  }

  public update<T>(updated: Task): Observable<Object> {
    if (updated) {
      const url = updated.id ? `/${updated.id}` : '';
      return this.http.post(`/tasks` + url, updated).pipe(map(
        Task => Task as Task
      ));;
    }
  }

  // Pipe item into Item class object to give functionality
  public subscribe(): Observable<Task[]> {
    return this._tasksSubject.asObservable().pipe((
      map((tasks: Task[]) => {
        return tasks;
      })
    ))
  }

  public assign(params: AssignedTask): Observable<AssignedTask> {
    if (params) {
      return this.http.post('/assignedTasks', params).pipe(map(
        task => task as AssignedTask
      ));
    }
  }

  public getQueue(taskId: string): Observable<AssignedTask[]> {
    if (taskId) {
      return this.http.get(`/assignedTasks/task/${taskId}`).pipe(map(
        tasks => tasks as AssignedTask[]
      ));;
    }
  }
}
