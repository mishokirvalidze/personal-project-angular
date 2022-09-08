import { IproductCard } from '../../../model/shared.model';
import { Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  private brands$ = new BehaviorSubject<string[]>([]);
  public brands = this.brands$.asObservable();

  @Input() products: IproductCard[] = [];

  ngOnInit(): void {
    this.brandFilter();

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
    this.brands$.next([]);
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public form = new FormGroup({
    search: new FormControl<string>(''),
  });

  public filterForm = new FormGroup({
    min: new FormControl<number>(0),
    max: new FormControl<number>(0),
  });

  public reset(): void {
    this.service.product(this.router.url);
  }

  private brandFilter(): void {
    setTimeout(() => {
      let myArray: string[] = [];

      this.products.forEach((item) => {
        myArray.push(item.brand);
      });
      let unique = myArray.filter((v, i, a) => a.indexOf(v) === i);
      this.brands$.next(unique);
    }, 400);
  }

  public filter(): void {
    let url = `${this.router.url}?`;

    let input = document.querySelectorAll('input[type=checkbox]');
    input.forEach((item) => {
      let checked = (item as HTMLInputElement).checked;
      if (checked) {
        url += `&brand=${item.id}`;
      }
    });

    let min = this.filterForm.controls.min.value as number;
    let max = this.filterForm.controls.max.value as number;

    min > 0 ? (url += `&price_gte=${min}`) : (url += '');

    max > min ? (url += `&price_lte=${max}`) : (url += '');

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
