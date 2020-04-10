import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { Task } from '../../../../interfaces/task.interface';
import { TaskService } from '../../../../services/task.service';
import { Observable } from 'rxjs';
import { IInput, InputType } from '../../../generic/input/input.component';

@Component({
  selector: 'okay-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task: Task;
  tabIndex: number;
  form: FormGroup = new FormGroup({});
  nameField: IInput = {
    type: InputType.String,
    name: '',
    formControlName: 'name',
    validators: Validators.required
  }

  constructor(
    private route: ActivatedRoute,
    private tasksService: TaskService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.tasksService.getById('1').subscribe(task => this.task = task);

    this.form.addControl('name', new FormControl(this.nameField.formControlName, this.nameField.validators));
  }

  // (change)="markAsCompleted(task, $event)"

  public login() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  switchTab(index: number): void {
    this.tabIndex = index;
  }
}
