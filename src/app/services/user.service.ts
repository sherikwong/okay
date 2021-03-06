import { Injectable } from '@angular/core';
import { AssignedTask } from '../interfaces/task.interface';
import { User } from '../interfaces/user.interface';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _task: AssignedTask;
  private _user: User;

  constructor(
    private accountService: AccountService
  ) { }

  public getFromTask(task: AssignedTask) {
    this._task = task;

        this._user = this.accountService.users.get(task.userId);
  }

  public get profileImage(): { [key: string]: string } {
    return this._user
      ? { 'background-image': `url(${this._user.photoUrl})` }
      : {};
  }


  public get name(): string {
    return this._user
      ? `${this._user.firstName} ${this._user.lastName}`
      : '';
  }
}
