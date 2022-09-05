import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './component/checkout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: CheckoutComponent, title: 'Megabyte - Checkout' },
    ]),
  ],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
