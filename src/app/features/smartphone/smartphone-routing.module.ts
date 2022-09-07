import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SmartphoneComponent } from './smartphone.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SmartphoneComponent,
        title: 'Megabyte - Smartphone',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class SmartphoneRoutingModule {}
