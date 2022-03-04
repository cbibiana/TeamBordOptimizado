import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //variables globales
  registerData: any;
  message: string = '';
  //las barritas de mensajes salen arriba el parte derecha (end)
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2000;

  //inicializa
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerData = {};
  }

  //metodos, validamos que esten todos los datos
  registerUser() {
    if (
      !this.registerData.name ||
      !this.registerData.email ||
      !this.registerData.password
    ) {
      this.message = 'Incomplete data';
      this.openSnackBarError();
    } else {
      this._userService.registerUser(this.registerData).subscribe({
        next: (v) => {
          localStorage.setItem('token', v.token)
          this._router.navigate(['/saveTask'])
          this.message = 'succesfull user registration';
          this.openSnackBarSuccesfull();
        },
        error: (e) => {
          this.message = e.error.message;
          this.openSnackBarError();
        },
      });
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarSuccesfull'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarError'],
    });
  }

  ngOnInit(): void {}
}
