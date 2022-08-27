import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: LoginComponent, title: 'Log in' },
    ]),
  ],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
