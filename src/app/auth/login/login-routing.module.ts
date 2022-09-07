import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: LoginComponent, title: 'Megabyte - Login' },
    ]),
  ],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
