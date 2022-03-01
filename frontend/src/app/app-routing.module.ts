//se encarga de las rutas, importa desde angular los modulos que va a utilizar
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { LoginComponent } from './home/login/login.component';

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
  },
];

//se navega entre los componentes, el forRoot  me ayuda a recorrer las rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
