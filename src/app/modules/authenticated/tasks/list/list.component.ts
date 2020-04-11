import { UserService } from '../../../../services/user.service';
import { AssignedTask } from '../../../../services/tasks.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Task } from '../../../../interfaces/task.interface';
import { TasksService } from '../../../../services/tasks.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../../../../interfaces/user.interface';
import { TaskService } from '../../../../services/task.service';

interface Services {
  user: UserService;
  task: TaskService;
}

@Component({
  selector: 'okay-tasks-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  host: { 'class': 'okay-container--fill' }
})
export class TasksListComponent implements OnInit {
  tasks: Observable<AssignedTask[]>;
  services?: Services[];

  displayedColumns: string[] = [
    'name',
    'dueDate',
    'assigned'
  ];

  constructor(
    private tasksService: TasksService,
    private snackBar: MatSnackBar,
    private router: Router,
    private injector: Injector
  ) { }

  ngOnInit() {

    this.tasks = this.tasksService.getAllQueued()
    .pipe(tap(tasks => {
      this.services = tasks.map(assignedTask => {
        const userService = this.injector.get<UserService>(UserService);
        userService.getFromTask(assignedTask);

        const taskService = this.injector.get<TaskService>(TaskService);
        taskService.get(assignedTask);

        return {
          user: userService,
          task: taskService
        };
      })
    }));
    this.tasks.subscribe(val => console.log(this.services));
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
