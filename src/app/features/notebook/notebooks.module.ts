import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookComponent } from './notebook.component';
import { NotebookRoutingModule } from './notebook-routing.module';
import { ShopModule } from '../../shared/modules/shop/shop.module';

@NgModule({
  declarations: [NotebookComponent],
  imports: [CommonModule, NotebookRoutingModule, ShopModule],
})
export class NotebookModule {}
