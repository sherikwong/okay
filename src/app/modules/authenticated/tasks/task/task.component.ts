import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { TaskService } from '../../../../services/task.service';
import { ITask } from '../../../../interfaces/task.interface';
import { AccountService } from '../../../../services/account.service';
import { GoogleLoginProvider, AuthService } from 'angularx-social-login';

@Component({
  selector: 'okay-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  // id: string;
  task: ITask;
  tabIndex: number;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TaskService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    // this.tasksService.getById(params.id)
    this.tasksService.getById('1')
      .subscribe(task => {
        // delete task.id;
        this.task = task;
        console.log(task);
      });
    // });
  }

  // (change)="markAsCompleted(task, $event)"

  public login() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  switchTab(index: number): void {
     console.log(index);
    this.tabIndex = index;
  }
}
