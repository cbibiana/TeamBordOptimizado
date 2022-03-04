import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //Crear una variable para contener la url que esta en environment
  private env: string;
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }
  registerUser(user: any) {
    //http://localhost:3001/api/user/register
    return this._http.post<any>(this.env + 'user/register', user);
  }
  login(user: any) {
    //http://localhost:3001/api/user/register
    return this._http.post<any>(this.env + 'user/login', user);
  }

  //metodo para saber si estoy logueado, si esta logueado devuelve un true o sino un false
  //return !! localStorage.getItem('token')este solo se utiliza para cuando tenemos o son falso o verdadero, pero tambien se pudo hacer con un if else o un ternario , solo para ser mas optimizado
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  //me vevulve el token que genero el usuario al registrarse
  getToken() {
    return localStorage.getItem('token');
  }

  //eliminar el token
  logout(){
    localStorage.removeItem('token')
  }
}
