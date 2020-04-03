import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { TaskService } from '../../../../services/task.service';
import { ITask } from '../../../../interfaces/task.interface';

@Component({
  selector: 'okay-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  // id: string;
  task: ITask;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TaskService
  ) { }

  ngOnInit(): void {
    this.tasksService.getAll().subscribe(val => console.log(val));
    this.route.params.subscribe(params => {
      this.tasksService.getById(params.id)
        .subscribe(task => {
          this.task = task;
          console.log(task);
        });
    });
  }

  // (change)="markAsCompleted(task, $event)"

}
