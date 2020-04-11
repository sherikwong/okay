import { UserService } from './../../../../services/user.service';
import { AssignedTask } from './../../../../services/task.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Task } from '../../../../interfaces/task.interface';
import { TaskService } from '../../../../services/task.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'okay-tasks-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  host: { 'class': 'okay-container--fill' }
})
export class TasksListComponent implements OnInit {
  tasks: Observable<AssignedTask[]>;
  userInfo?: UserService[];

  displayedColumns: string[] = [
    'name',
    'dueDate',
    'assigned'
  ];


  constructor(
    private tasksService: TaskService,
    private snackBar: MatSnackBar,
    private router: Router,
    private injector: Injector
  ) { }

  ngOnInit() {

    this.tasks = this.tasksService.getAllQueued()
    .pipe(tap(tasks => {
      this.userInfo = tasks.map(task => {
        const service = this.injector.get<UserService>(UserService);
        service.getFromTask(task);
        return service;
      })
    }));
    this.tasks.subscribe(val => console.log(val));
  }

  // markAsCompleted(task: Task, change: any) {
  //   this.tasksService.update(task);
  // }

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  select(task: Task) {
    this.router.navigate(['tasks', task.id]);
  }
}
