import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { InfoComponent } from './components/info/info.component';
import { DescriptionComponent } from './components/description/description.component';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { GalleryDirective } from './components/gallery/directive/gallery.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    GalleryComponent,
    InfoComponent,
    DescriptionComponent,
    GalleryDirective,
  ],
  imports: [CommonModule, ProductDetailsRoutingModule, FormsModule],
})
export class ProductDetailsModule {}
