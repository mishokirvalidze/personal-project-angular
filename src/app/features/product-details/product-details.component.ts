import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { tap, BehaviorSubject, map, Subscription } from 'rxjs';
import { IproductCard, Icart } from '../../shared/model/shared.model';
import { CartService } from '../../shared/service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  private unsubscribe: Subscription[] = [];

  ngOnInit(): void {
    this.unsubscribe.push(
      this.activeRoute.queryParams
        .pipe(
          tap((data) => ((this.id = data['id']), (this.path = data['path'])))
        )
        .subscribe()
    );

    this.getProduct();
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  private id = 0;
  private path = '';

  private productData$ = new BehaviorSubject<IproductCard>({
    id: 0,
    name: '',
    price: 0,
    oldPrice: 0,
    smallDesc: '',
    description: [],
    offer: 0,
    imgs: [],
    alt: '',
    path: '',
    quantity: 0,
    brand: '',
  });

  public productData = this.productData$.asObservable();

  private getProduct(): void {
    this.http
      .get<IproductCard>('http://localhost:3000/' + this.path + '/' + this.id)
      .pipe(
        map((data) => {
          data.imgs = data.imgs.map((img) => {
            return '../../../../../assets/images' + img;
          });
          this.productData$.next(data);
        })
      )
      .subscribe();
  }

  public cart(data: IproductCard): void {
    let arr: Icart[] = [];

    this.unsubscribe.push(
      this.cartService.cartList
        .pipe(
          tap((cartData) => {
            arr = cartData;
          })
        )
        .subscribe()
    );

    arr.push(data as Icart);

    this.cartService.pushInCartList(arr);
  }
}
