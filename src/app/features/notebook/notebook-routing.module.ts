import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotebookComponent } from './notebook.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: NotebookComponent, title: 'Megabyte - Notebook' },
    ]),
  ],
  exports: [RouterModule],
})
export class NotebookRoutingModule {}
