import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Icarousel } from '../../model/home.model';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsComponent implements OnInit, OnDestroy {
  private interval: NodeJS.Timer | undefined;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  @Input() imgData: Icarousel[] = [];

  private nextSlide(): void {
    let imgParent = document.querySelector('.brands-imgs');
    let imgElements = document.querySelectorAll('.brands-imgs img');
    imgParent?.append(imgElements[0]);
  }
}
