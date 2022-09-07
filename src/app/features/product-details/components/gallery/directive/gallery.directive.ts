import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGallery]',
})
export class GalleryDirective {
  constructor(private el: ElementRef) {}

  @HostListener('load')
  load(): void {
    let elements = document.querySelectorAll('.img-slide');
    elements[0].classList.add('active');
  }

  @HostListener('click')
  chageImage(): void {
    let element = this.el.nativeElement as HTMLDivElement;
    let elements = document.querySelectorAll('.img-slide');
    let src: string = this.el.nativeElement.src;
    let preview = document.getElementById('preview') as HTMLImageElement;
    preview.src = src;
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('active');
    }
    element.parentElement!.classList.add('active');
  }
}
