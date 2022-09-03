import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Icarousel } from '../../model/home.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.onNextClick();
    }, 3000);
  }

  @Input() images: Icarousel[] = [];

  index = 0;
  currentIndex$ = new BehaviorSubject<number>(this.index);

  selectedImage(index: number): void {
    this.index = index;
  }

  onPrevClick(): void {
    if (this.index === 0) {
      this.index = this.images.length - 1;
      this.currentIndex$.next(this.index);
    } else {
      this.index++;
      this.currentIndex$.next(this.index);
    }
  }

  onNextClick(): void {
    if (this.index === this.images.length - 1) {
      this.index = 0;
      this.currentIndex$.next(this.index);
    } else {
      this.index++;
      this.currentIndex$.next(this.index);
    }
  }
}
