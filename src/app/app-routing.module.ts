import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseLayoutComponent} from './share/layout/base-layout/base-layout.component';
import {AuthLayoutComponent} from './share/layout/auth-layout/auth-layout.component';
import {AuthGuard} from './share/security/auth-guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  {
    path: '',
    component: BaseLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'dashboard', loadChildren: () => import('./component/content/dashboard/dashboard.module').then(m => m.DashboardModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
