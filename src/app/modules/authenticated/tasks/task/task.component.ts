import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Task } from '../../../../interfaces/task.interface';
import { TasksService } from '../../../../services/tasks.service';
import { IInput, InputType } from '../../../generic/input/input.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { KeyValue } from '@angular/common';

interface TabRouting {
  path: string;
  name: string;
  icon: string;
  order: number;
}

@Component({
  selector: 'okay-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  host: { 'class': 'okay-container--fill flex-column' }
})
export class TaskComponent implements OnInit {
  task: Partial<Task> = { id: '1' };
  tabIndex: number;
  form: FormGroup;
  nameField: IInput = {
    type: InputType.String,
    name: '',
    formControlName: 'name',
    validators: Validators.required
  }

  tabs: { [key: string]: TabRouting };
  private currentTab: string;


  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tasksService.getById('1').subscribe(task => this.task = task);

    this.tabs = {
      details: {
        path: 'details',
        name: 'Details',
        icon: 'info',
        order: 1
      },
      assigned: {
        path: 'assigned',
        name: 'Assigned',
        icon: 'person_add',
        order: 2
      },
      comments: {
        path: 'comments',
        name: 'Comments',
        icon: 'comment',
        order: 3
      },
    };

    // this.currentTab = this.route.children[0].routeConfig.path;
    // this.onSelectTab(this.currentTab);

    // this.route.paramMap.pipe(tap((paramsMap: ParamMap) => {
      // const id = paramsMap.get('id');
      const id = '1';
      this.tasksService.getById(id)
        .subscribe(task => {
          this.task = task;
        });
    // })).subscribe();


    this.form = this.fb.group({
      name: this.fb.control(this.nameField.formControlName, {
        validators: this.nameField.validators
      })
    }, {
        updateOn: 'blur'
      });

    this.form.valueChanges.subscribe(name => this.updateName(name));
  }

  switchTab(index: number): void {
    this.tabIndex = index;
  }

  private updateName(name: Partial<Task>): void {
    console.log('Updating');
    const task = { ...this.task, ...name } as Task;

    this.tasksService.update(task).toPromise().then(task => {
      console.log(task);
    });
  }

  public onSelectTab(tabName: string): void {
    console.log(`task/${this.task.id}/${this.tabs[tabName].path}`);
    this.router.navigateByUrl(`tasks/${this.task.id}/${this.tabs[tabName].path}`, {
      state: this.task
    });
  }

  public keyValuePipeCompare = (a: TabRouting, b: TabRouting): number => {
    return a.order > b.order ? -1 : (b.order > a.order ? 1 : 0);
  }
}
