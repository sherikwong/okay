import { FormBuilder, FormGroup } from '@angular/forms';
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
import { InputType, IInput } from '../../../generic/input/input.component';

interface Services {
  user: UserService;
  task: TaskService;
}

@Component({
  selector: 'okay-tasks-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  host: { 'class': 'okay-container--fill flex-column' }
})
export class TasksListComponent implements OnInit {
  public assignedTask: Observable<AssignedTask[]>;
  tasks?: TaskService[];
  form: FormGroup;
  inputParams: IInput = {
    type: InputType.String,
    name: 'Filter',
    formControlName: 'filter'
  };

  displayedColumns: string[] = [
    'name',
    'dueDate'
  ];

  constructor(
    private tasksService: TasksService,
    private snackBar: MatSnackBar,
    private router: Router,
    private injector: Injector,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'filter': this.fb.control('')
    });

    this.assignedTask = this.tasksService.getAllQueued()
      .pipe(tap(tasks => {
        this.tasks = tasks.map(assignedTask => {
          const taskService = this.injector.get<TaskService>(TaskService);
          taskService.get(assignedTask);
          console.log(assignedTask);
          return taskService;
        })
      }));

    this.assignedTask.subscribe();
  }

  // markAsCompleted(task: Task, change: any) {
  //   this.tasksService.update(task);
  // }

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  masterToggle() {

  }

  goToTask(task: TaskService) {
    this.router.navigate(['tasks', task.id]);
  }
}
