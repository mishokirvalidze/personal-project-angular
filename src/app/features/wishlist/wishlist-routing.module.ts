import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WishlistComponent } from './wishlist.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: WishlistComponent,
        title: 'Megabyte - Wishlist',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class WishlistRoutingModule {}
