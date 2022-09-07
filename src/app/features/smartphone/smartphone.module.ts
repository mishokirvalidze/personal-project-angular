import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartphoneComponent } from './smartphone.component';
import { SmartphoneRoutingModule } from './smartphone-routing.module';
import { ShopModule } from '../../shared/modules/shop/shop.module';

@NgModule({
  declarations: [SmartphoneComponent],
  imports: [CommonModule, SmartphoneRoutingModule, ShopModule],
})
export class SmartphoneModule {}
