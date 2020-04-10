import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { Task } from '../../../../interfaces/task.interface';
import { TaskService } from '../../../../services/task.service';
import { IInput, InputType } from '../../../generic/input/input.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'okay-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task: Partial<Task> = {id: '1'};
  tabIndex: number;
  form: FormGroup;
  nameField: IInput = {
    type: InputType.String,
    name: '',
    formControlName: 'name',
    validators: Validators.required
  }

  constructor(
    private route: ActivatedRoute,
    private tasksService: TaskService,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.task);
    this.tasksService.getById('1').subscribe(task => this.task = task);

    this.form = this.fb.group({name: this.fb.control(this.nameField.formControlName, {
      validators: this.nameField.validators
    })}, {
      updateOn: 'blur'
    });

    this.form.valueChanges.subscribe(name => this.updateName(name));
  }

  // (change)="markAsCompleted(task, $event)"

  public login() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  switchTab(index: number): void {
    this.tabIndex = index;
  }

  private updateName(name: Partial<Task>): void {
    console.log('Updating');
    const task = {...this.task, ...name} as Task;

    this.tasksService.update(task).toPromise().then(task => {
      console.log(task);
    });
  }
}
