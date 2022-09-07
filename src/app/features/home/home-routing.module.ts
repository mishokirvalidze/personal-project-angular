import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeComponent, title: 'Megabyte' },
    ]),
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
