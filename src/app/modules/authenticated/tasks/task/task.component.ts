import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { Task } from '../../../../interfaces/task.interface';
import { TaskService } from '../../../../services/task.service';

@Component({
  selector: 'okay-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  // id: string;
  task: Task;
  tabIndex: number;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TaskService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    // this.tasksService.getById(params.id)
    this.tasksService.getById('1').subscribe(task => {
      this.task = task;
    });
    // });
  }

  // (change)="markAsCompleted(task, $event)"

  public login() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  switchTab(index: number): void {
    this.tabIndex = index;
  }
}
