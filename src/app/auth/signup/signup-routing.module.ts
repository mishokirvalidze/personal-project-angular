import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './component/signup.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: SignupComponent, title: 'Megabyte - Signup' },
    ]),
  ],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
