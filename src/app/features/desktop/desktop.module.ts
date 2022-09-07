import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { ShopModule } from '../../shared/modules/shop/shop.module';
import { DesktopRoutingModule } from './desktop-routing.module';

@NgModule({
  declarations: [DesktopComponent],
  imports: [CommonModule, ShopModule, DesktopRoutingModule],
})
export class DesktopModule {}
