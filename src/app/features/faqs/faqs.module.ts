import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from './faqs.component';
import { FaqsDirective } from './directive/faqs.directive';
import { FaqsRoutingModule } from './faqs-routing.module';

@NgModule({
  declarations: [FaqsComponent, FaqsDirective],
  imports: [CommonModule, FaqsRoutingModule],
})
export class FaqsModule {}
