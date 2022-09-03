import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
