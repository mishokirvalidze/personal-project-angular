import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Icarousel } from '../../model/home.model';
import { BehaviorSubject } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit, OnDestroy {
  constructor() {}

  private interval: NodeJS.Timer | undefined;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.onNextClick();
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  @Input() images: Icarousel[] = [];

  private index = 0;
  private currentIndex$ = new BehaviorSubject<number>(this.index);
  public currentIndex = new BehaviorSubject<number>(this.index);

  public selectedImage(index: number): void {
    this.index = index;
  }

  public onPrevClick(): void {
    if (this.index === 0) {
      this.index = this.images.length - 1;
      this.currentIndex$.next(this.index);
    } else {
      this.index++;
      this.currentIndex$.next(this.index);
    }
  }

  public onNextClick(): void {
    if (this.index === this.images.length - 1) {
      this.index = 0;
      this.currentIndex$.next(this.index);
    } else {
      this.index++;
      this.currentIndex$.next(this.index);
    }
  }
}
