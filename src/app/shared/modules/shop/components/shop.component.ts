import { IproductCard } from '../../../model/shared.model';
import { Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit, OnDestroy {
  constructor(private service: ProductService, private router: Router) {}

  private destroy$ = new Subject();

  @Input() products: IproductCard[] = [];

  ngOnInit(): void {
    this.form.controls.search.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(200),
        distinctUntilChanged(),
        tap((value) => {
          this.service.product(`${this.router.url}?q=${value}`);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public form = new FormGroup({
    search: new FormControl<string>(''),
  });

  public filterForm = new FormGroup({
    min: new FormControl<number>(0),
    max: new FormControl<number>(0),
    apple: new FormControl<boolean>(false),
    dell: new FormControl<boolean>(false),
    samsung: new FormControl<boolean>(false),
    asus: new FormControl<boolean>(false),
    acer: new FormControl<boolean>(false),
  });

  public reset(): void {
    this.service.product(this.router.url);
  }

  public filter(): void {
    let url = `${this.router.url}?`;
    let min = this.filterForm.controls.min.value as number;
    let max = this.filterForm.controls.max.value as number;
    let apple = this.filterForm.controls.apple.value as boolean;
    let samsung = this.filterForm.controls.samsung.value as boolean;
    let dell = this.filterForm.controls.dell.value as boolean;
    let asus = this.filterForm.controls.asus.value as boolean;
    let acer = this.filterForm.controls.acer.value as boolean;

    min > 0 ? (url += `&price_gte=${min}`) : (url += '');

    max > min ? (url += `&price_lte=${max}`) : (url += '');

    apple ? (url += `&brand=apple`) : (url += '');

    dell ? (url += `&brand=dell`) : (url += '');

    samsung ? (url += `&brand=samsung`) : (url += '');

    asus ? (url += `&brand=asus`) : (url += '');

    acer ? (url += `&brand=acer`) : (url += '');

    this.service.product(url);
  }

  public select(event: Event) {
    let value = (event.target as HTMLSelectElement).value;

    if (value === 'default') {
      this.service.product(this.router.url);
    }

    if (value === 'lower-price') {
      this.service.product(`${this.router.url}?_sort=price&_order=asc`);
    }

    if (value === 'higher-price') {
      this.service.product(`${this.router.url}?_sort=price&_order=desc`);
    }

    if (value === 'name-a') {
      this.service.product(`${this.router.url}?_sort=name&_order=asc`);
    }

    if (value === 'name-z') {
      this.service.product(`${this.router.url}?_sort=name&_order=desc`);
    }
  }
}
