import { TaskService } from './../../../../../services/task.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'okay-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnChanges {
  @Input() taskId: string;
  constructor(
    private taskService: TaskService
  ) {}

  ngOnChanges(): void {
    console.log(this.taskId);
    if (this.taskId) {
      this.taskService.getQueue('1').subscribe(val => console.log(val));
    }
  }
}
