import { Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Directive({
  selector: '[appCategory]',
})
export class CategoryDirective implements OnDestroy {
  constructor(private el: ElementRef) {}

  ngOnDestroy(): void {
    this.index$.unsubscribe();
  }

  index = 0;
  index$ = new BehaviorSubject<number>(this.index);

  @HostListener('click')
  slide(): void {
    let categoryElements = document.querySelectorAll('.category');
    let count = categoryElements.length - 1;
    let element = this.el.nativeElement as HTMLDivElement;

    let dot = document.querySelectorAll('.dots .dot');

    this.index$
      .pipe(
        tap((data) => {
          for (let i = 0; i <= count; i++) {
            categoryElements[i].classList.remove('active');
            dot[i].classList.remove('active');
            console.log(dot[i]);
          }

          dot[data].classList.add('active');

          categoryElements[data].classList.add('active');
        })
      )
      .subscribe();

    if (element.classList.contains('left-arrow')) {
      if (this.index === 0) {
        this.index = count;
        this.index$.next(count);
      } else {
        this.index--;
        this.index$.next(this.index);
      }
      console.log(this.index);
    } else {
      if (this.index === count) {
        this.index = 0;
        this.index$.next(0);
      } else {
        this.index++;
        this.index$.next(this.index);
      }
    }
  }
}
