import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../../services/tasks.service';
import { tasks } from '../../../../../dummy';
import { ITask } from '../../../../interfaces/task.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'okay-tasks-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class TasksListComponent implements OnInit {
  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit() {

  }

  public get tasks(): Map<string, ITask> {
    console.log(this.tasksService.getAll());
    return this.tasksService.getAll();
  }
}
