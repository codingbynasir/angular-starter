import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';


const router: Routes = [
  {path: 'login', component: LoginComponent, data: {title: 'Login'}}
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
