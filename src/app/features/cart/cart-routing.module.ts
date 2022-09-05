import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './component/cart.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: CartComponent, title: 'Megabyte - Cart' },
    ]),
  ],
  exports: [RouterModule],
})
export class CartRoutingModule {}
