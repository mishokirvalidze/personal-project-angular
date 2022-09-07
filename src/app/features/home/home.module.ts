import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { InfoComponent } from './components/info/info.component';
import { OffersComponent } from './components/offers/offers.component';
import { Banner2Component } from './components/banner2/banner2.component';
import { NotebooksComponent } from './components/notebooks/notebooks.component';
import { SmartphonesComponent } from './components/smartphones/smartphones.component';
import { CategoryComponent } from './components/category/category.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductCardModule } from '../../shared/modules/product-card/product-card.module';
import { CategoryDirective } from './components/category/directive/category.directive';
import { BrandsDirective } from './components/brands/directive/brands.directive';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    InfoComponent,
    OffersComponent,
    Banner2Component,
    NotebooksComponent,
    SmartphonesComponent,
    CategoryComponent,
    BrandsComponent,
    CategoryDirective,
    BrandsDirective,
  ],
  imports: [CommonModule, HomeRoutingModule, ProductCardModule],
})
export class HomeModule {}
