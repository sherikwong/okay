import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { Task } from '../../../../interfaces/task.interface';
import { TaskService } from '../../../../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'okay-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task: Observable<Task>;
  tabIndex: number;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TaskService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.task = this.tasksService.getById('1');
    this.task.subscribe();
  }

  // (change)="markAsCompleted(task, $event)"

  public login() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  switchTab(index: number): void {
    this.tabIndex = index;
  }
}
