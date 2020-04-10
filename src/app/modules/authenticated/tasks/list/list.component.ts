import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../services/task.service';
import { Task } from '../../../../interfaces/task.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MbscEventcalendarOptions } from '../../../../../lib/mobiscroll/js/mobiscroll.angular.min';

@Component({
  selector: 'okay-tasks-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  host: { 'class': 'okay-container--fill' }
})
export class TasksListComponent implements OnInit {
  events: any;

    eventSettings: MbscEventcalendarOptions = {
        theme: 'ios',
        themeVariant: 'light',
        display: 'inline',
        view: {
            calendar: { type: 'month' },
            eventList: { type: 'month', scrollable: true }
        }
    };
  tasks: Task[];

  constructor(
    private tasksService: TaskService,
    private snackBar: MatSnackBar,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.jsonp('https://trial.mobiscroll.com/events/', 'callback').subscribe((resp: any) => {
      this.events = resp;
  });

    this.tasksService.getAll().subscribe(val => {
      this.tasks = val;
    });
    // const task = {
    //   id: '1',
    //   name: 'Wash the dishes',
    //   dueDate: new Date(2011, 2, 3)
    // } as ITask;
  }

  markAsCompleted(task: Task, change: any) {
    this.tasksService.update(task);
  }

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  select(task: Task) {
    this.router.navigate(['tasks', task.id]);
  }
}
