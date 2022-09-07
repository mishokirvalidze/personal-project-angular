import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, tap, Subscription } from 'rxjs';
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
    setTimeout(() => {
      this.cartService.getCart();
      this.cartService.count();
    }, 400);

    this.cart = this.cartService.cartList;
    this.subtotal = this.cartService.subtotal;
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public cart = new Observable<Icart[]>();
  public subtotal = new Observable<number>();

  private arr: Icart[] = [];

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
    this.cartService.count();
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
    this.cartService.count();
  }

  public deleteAll(): void {
    this.cartService.deleteProduct([]);
  }
}
