import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductDetailsComponent,
        title: 'Megabyte - Product details',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductDetailsRoutingModule {}
