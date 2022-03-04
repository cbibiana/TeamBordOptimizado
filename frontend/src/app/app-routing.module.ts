//se encarga de las rutas, importa desde angular los modulos que va a utilizar
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AuthGuard } from "./guard/auth.guard";

// en esta varible routes crea una lista, y los recorre y exporta para poder utilizar esos componentes
//para el primer link es q le primero debe cargar en la pag sera el login
//path = a ruta, le vamos a indicar que la ruta raiz es login
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'listTask',
    component: ListTaskComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'saveTask',
    component: SaveTaskComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'signUp',
    component: RegisterComponent,
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'listUser',
    component: ListUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent,
    canActivate:[AuthGuard]
  },
];

//se navega entre los componentes, el forRoot  me ayuda a recorrer las rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
