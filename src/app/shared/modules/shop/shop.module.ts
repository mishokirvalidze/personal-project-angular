import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './components/shop.component';
import { ProductCardModule } from '../product-card/product-card.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, ProductCardModule, ReactiveFormsModule],
  exports: [ShopComponent],
})
export class ShopModule {}
