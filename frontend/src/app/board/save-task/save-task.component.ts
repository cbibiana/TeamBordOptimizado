import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css'],
})
export class SaveTaskComponent implements OnInit {
  registerTask: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2000;
  constructor(
    private _taskService: TaskService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerTask = {};
  }

  taskRegister() {
    if (
      !this.registerTask.name ||
      !this.registerTask.description ||
      !this.registerTask.taskStatus ||
      !this.registerTask.imageUrl
    ) {
      this.message = 'Incomplete data';
      this.openSnackBarError();
    } else {
      this._taskService.taskRegister(this.registerTask).subscribe({
        next: (v) => {
          localStorage.setItem('toke', v.token);
          this._router.navigate(['/listTask']);
          this.message = 'succesfull task registration';
          this.openSnackBarSuccesfull();
        },
        error: (e) => {
          this.message = e.error.message;
          this.openSnackBarError();
        },
      });
    }
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarError'],
    });
  }
  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarSuccesfull'],
    });
  }

  ngOnInit(): void {}
}
