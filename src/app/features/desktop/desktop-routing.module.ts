import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesktopComponent } from './desktop.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DesktopComponent, title: 'Megabyte - Desktop' },
    ]),
  ],
  exports: [RouterModule],
})
export class DesktopRoutingModule {}
