import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, tap, Subscription, BehaviorSubject } from 'rxjs';
import { Icart } from '../../../shared/model/shared.model';
import { CartService } from '../../../shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService) {}

  private unsubscribe: Subscription[] = [];

  ngOnInit(): void {
    this.cartService.getCart();
    this.cart = this.cartService.cartList;

    this.count();
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  private subtotal$ = new BehaviorSubject<number>(0);
  public subtotal = this.subtotal$.asObservable();

  public cart = new Observable<Icart[]>();

  private arr: Icart[] = [];

  private count(): void {
    let subTotal = 0;

    this.cart.forEach((items) => {
      items.forEach((item) => {
        subTotal += item.quantity * item.price;
      });
    });

    this.subtotal$.next(subTotal);
  }

  public inputChange(item: Icart) {
    this.unsubscribe.push(
      this.cartService.cartList
        .pipe(
          tap((cartData) => {
            this.arr = cartData;
          })
        )
        .subscribe()
    );

    let cartArray = this.arr.map((data) => {
      if (data == item) {
        return item;
      }
      return data;
    });

    this.cartService.pushInCartList(cartArray);
    this.count();
  }

  public delete(item: Icart): void {
    this.unsubscribe.push(
      this.cart
        .pipe(
          tap((data) => {
            this.arr = data.filter((data) => data !== item);
          })
        )
        .subscribe()
    );

    this.cartService.deleteProduct(this.arr);
    this.count();
  }

  public deleteAll(): void {
    this.cartService.deleteProduct([]);
  }
}
