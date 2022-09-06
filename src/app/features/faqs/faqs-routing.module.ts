import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaqsComponent } from './faqs.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: FaqsComponent, title: "Megabyte - FAQ'S" },
    ]),
  ],
  exports: [RouterModule],
})
export class FaqsRoutingModule {}
