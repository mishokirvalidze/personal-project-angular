import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFaqs]',
})
export class FaqsDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick(): void {
    let element = this.el.nativeElement as HTMLDivElement;
    element.classList.toggle('active');
  }
}
