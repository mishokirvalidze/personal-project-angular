import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from './faqs/faqs.component';
import { FaqsDirective } from './directive/faqs.directive';



@NgModule({
  declarations: [
    FaqsComponent,
    FaqsDirective
  ],
  imports: [
    CommonModule
  ]
})
export class FaqsModule { }
