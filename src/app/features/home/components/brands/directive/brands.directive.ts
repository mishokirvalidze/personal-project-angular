import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBrands]',
})
export class BrandsDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  slide(): void {
    let element = this.el.nativeElement as HTMLDivElement;

    let imgParent = document.querySelector('.brands-imgs');
    let imgElements = document.querySelectorAll('.brands-imgs img');

    if (element.classList.contains('next')) {
      imgParent?.append(imgElements[0]);
    } else {
      imgParent?.prepend(imgElements[imgElements.length - 1]);
    }
  }
}
